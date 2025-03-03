// import { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { UserContext } from "../../context/UserContext";
// import { customerLinks, spsoLinks } from "./page_links";
import "../../assets/styles/footer.css";
import logo_BK_border from "../../assets/img/logo_BK_border.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";

function Footer() {
    // const { user } = useContext(UserContext);
    // const [pageLinks, setPageLinks] = useState([]);

    // useEffect(() => {
    //     if (user.isSPSO) {
    //         setPageLinks(spsoLinks);
    //     } else {
    //         setPageLinks(customerLinks);
    //     }
    // }, [user]);

    return (
        <footer className="bg-dark pt-2 text-white">
            <div className="container mt-4 px-3 px-md-0">
                <div className="row mt-3 justify-content-around">
                    <div className="col-12 col-md-4 col-lg-5 mb-3 text-center mb-5 mb-md-0">
                        <h6 className="text-uppercase fw-bold mb-3">
                            HCMUT - SSPS
                        </h6>
                        <img
                            src={logo_BK_border}
                            alt="Logo Bách Khoa TPHCM"
                            width={80}
                            height={80}
                            draggable="false"
                            className="mx-auto d-block"
                        />
                    </div>
                    <div className="col-12 col-md-4 col-lg-5 mb-md-0 mb-3">
                        <h6 className="text-uppercase fw-bold mb-3">Liên hệ</h6>
                        <p>
                            <FaLocationDot /> 268 Lý Thường Kiệt, phường 14,
                            quận 10, TP.HCM
                        </p>
                        <p>
                            <MdCall /> (012) 34 567 89 - (012) 34 567 89 (Ext:
                            1234, 1234)
                        </p>
                        <p>
                            <MdEmail /> ssps@hcmut.edu.vn
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center fw-bold p-3" id="cp-write">
                &copy; {new Date().getFullYear()} Copyright
            </div>
        </footer>
    );
}

export default Footer;

// function FooterLinks({ pageLinks }) {
//     return (
//         <ul className="nav row">
//             {pageLinks.map(({ name, to }, index) => (
//                 <li key={index} className="nav-item col-6 col-md-12 mb-2">
//                     <Link to={to} className="nav-link p-0 hover-foot">
//                         {name}
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     );
// }
