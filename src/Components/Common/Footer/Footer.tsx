import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pb-5 mb-lg-5 mb-0 footer">
      <Container>
        {/* Navigation Links */}
        <div>
          <ul className="footer_links d-flex align-items-center justify-content-center gap-lg-5 gap-4">
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

          {/* Copyright */}
          <p className="text-center pt-5">
            © {new Date().getFullYear()} Ved Diaries. All rights reserved.
          </p>

          {/* Your Credit */}
          <p className="text-center">
            Developed by{" "}
            <a
              href="https://your-portfolio-link.com"
              target="_blank"
              rel="noreferrer"
              className="fw-semibold text-decoration-none"
            >
              Deepshikha
            </a>
          </p>
        </div>

        {/* Contact Section */}
        <ul className="list-unstyled d-flex mt-5 pt-lg-5 pt-0 justify-content-center gap-lg-5 gap-4 flex-wrap">

          {/* Phone 1 */}
          <li className="mb-3">
            <a
              href="tel:9877260236"
              className="d-flex align-items-center text-dark text-decoration-none"
            >
              <FaPhoneAlt size={17} className="mt-1" />
              <div className="fs-6 ms-3">
                <span className="phone">Lucky: 9877260236</span>
              </div>
            </a>
          </li>

          {/* Phone 2 */}
          <li className="mb-3">
            <a
              href="tel:7528972377"
              className="d-flex align-items-center text-dark text-decoration-none"
            >
              <FaPhoneAlt size={17} className="mt-1" />
              <div className="fs-6 ms-3">
                <span className="phone">Aditya: 7528972377</span>
              </div>
            </a>
          </li>

          {/* Email */}
          <li className="mb-3 text-center">
            <a
              href="mailto:veddiaries4@gmail.com"
              className="d-flex align-items-center text-dark text-decoration-none"
            >
              <MdEmail size={18} className="mt-1" />
              <div className="ms-3">
                <span className="phone">Email: veddiaries4@gmail.com</span>
              </div>
            </a>
          </li>

          {/* Developer Contact */}
          <li className="mb-3 text-center">
            <p className="mb-1">For website development contact</p>
            <a
              href="mailto:493deepshikha@gmail.com"
              className="d-flex align-items-center justify-content-center text-dark text-decoration-none"
            >
              <MdEmail size={18} className="mt-1" />
              <div className="ms-2">
                <span className="phone">493deepshikha@gmail.com</span>
              </div>
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;