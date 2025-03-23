import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../assets/images/logo.png";
import "./Header.scss";
import { useEffect, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = ({ headerClass }: any) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showOverlay ? "hidden" : "";
  }, [showOverlay]);

  return (
    <header className={`header ${headerClass}`}>
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
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavDropdown
                title="Portfolio"
                id="basic-nav-dropdown"
                show={isDropdownOpen}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link to="wedding" className="dropdown-item">
                  Wedding
                </Link>
                <Link to="pre-wedding" className="dropdown-item">
                  Pre Wedding
                </Link>
                <Link to="events" className="dropdown-item">
                  Events and Parties
                </Link>
              </NavDropdown>

              <NavLink className="nav-link" to="contact-us">
                Contact Us
              </NavLink>
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
