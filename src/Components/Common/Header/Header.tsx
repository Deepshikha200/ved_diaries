import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../assets/images/logo.png";
import "./Header.scss";
import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = showOverlay ? "hidden" : "";
  }, [showOverlay]);

  return (
    <header className={`header ${isScrolled ? "scroll_header" : ""}`}>
      <div
        className={`overlay ${showOverlay ? "show" : ""}`}
        onClick={() => {
          setShowOverlay(false);
          setIsNavOpen(false);
        }}
      ></div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Collapse in={isNavOpen} id="basic-navbar-nav">
            <Navbar.Brand className="d-lg-none d-block ">
              <img src={logo} alt="" />
            </Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link className="nav-link">Home</Nav.Link>
              <Nav.Link className="nav-link">About</Nav.Link>
              <Nav.Link className="nav-link">Portfolio</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => {
              setShowOverlay(!showOverlay);
              setIsNavOpen(!isNavOpen);
            }}
          />
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
