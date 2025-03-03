import ProgressiveImage from "react-progressive-graceful-image";
import upload_button from "../../assets/img/upload.png";

function UploadArea({ setLength }) {
  const uploadFiles = (files) => {
    const storedFiles = localStorage.getItem("files");
    let updated_files = [];

    if (storedFiles !== null) {
      updated_files = JSON.parse(storedFiles);
    }

    const newFiles = files.map((file) => file.name);
    updated_files = newFiles.concat(updated_files);

    const newLength = updated_files.length;

    const files_set = new Set(updated_files);
    updated_files = [...files_set];

    localStorage.setItem("files", JSON.stringify(updated_files));

    setLength(newLength);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer?.files || [];
    uploadFiles(Array.from(droppedFiles));
  };

  const handleFileUpload = (event) => {
    event.preventDefault();
    const uploadedFiles = event.target?.files || [];
    console.log(uploadedFiles);
    uploadFiles(Array.from(uploadedFiles));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="col-5 d-flex justify-content-center bg-white rounded-4 p-2"
      style={{
        border: "dashed 1px rgba(0, 0, 0, 1)",
        width: "90%",
        height: "100%",
      }}
    >
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="text-center"
        style={{ height: "100%" }}
      >
        <ProgressiveImage src={upload_button}>
          {(src, loading) => (
            <div
              style={{
                backgroundImage: `url(${src})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "25%",
                margin: "0 auto",
              }}
            >
              <img
                src={src}
                className={`d-block mx-auto image${
                  loading ? " loading" : " loaded"
                }`}
                alt="Upload Logo"
                id="upload-logo"
                draggable="false"
                style={{
                  visibility: loading ? "hidden" : "visible",
                }}
              />
            </div>
          )}
        </ProgressiveImage>
        <div className="text">Kéo thả tài liệu tại đây</div>
        <div className="text">-- Hoặc --</div>
        <input
          id="fileInput"
          name="file"
          type="file"
          multiple={true}
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
        <button
          className="btn text-white fw-medium mb-2 mb-md-4"
          id="button"
          onClick={() => document.getElementById("fileInput").click()}
        >
          Chọn tài liệu
        </button>
      </div>
    </div>
  );
}

export default UploadArea;
