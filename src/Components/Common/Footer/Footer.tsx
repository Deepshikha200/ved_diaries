import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { MdEmail } from "react-icons/md";
// import { FaFacebookSquare, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pb-5 mb-lg-5  mb-0 footer">
      <Container>
        <div>
          <ul className="footer_links d-flex align-items-center justify-content-center gap-lg-5 gap-4 ">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="/">CONTACT US</Link>
            </li>
          </ul>
          <p className="text-center pt-5">
            All content Copyright &copy; 2025 Ved Diaries
          </p>
        </div>

        <ul className="list-unstyled d-flex mt-5 pt-lg-5 pt-0 justify-content-center gap-lg-5 gap-4 flex-wrap">
          <li className="mb-3">
            <Link
              to="tel:9877260236"
              className="d-flex align-items-center"
              style={{ color: "#000", textDecoration: "none" }}
            >
              <FaPhoneAlt size={17} className="mt-1" />
              <div className="fs-6 ms-3 text-dark">
                <span className="phone">Lucky: 9877260236</span>
              </div>
            </Link>
          </li>
          <li className="mb-3">
            <Link
              to="tel:752897277"
              className="d-flex align-items-center"
              style={{ color: "#000", textDecoration: "none" }}
            >
              <FaPhoneAlt size={17} className="mt-1" />
              <div className="fs-6 ms-3 text-dark">
                <span className="phone">Aditya: 7528972377</span>
              </div>
            </Link>
          </li>
          <li className="mb-3">
            <Link
              to="mailto:lkumar7810@gmail.com"
              className="d-flex align-items-center"
              style={{ color: "#000", textDecoration: "none" }}
            >
              <MdEmail size={18} className="mt-1" />
              <div className=" ms-3 text-dark">
                <span className="phone">Email: veddiaries4@gmail.com</span>
              </div>
            </Link>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
