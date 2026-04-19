import { Layout, Button } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useLocation, Link } from "react-router-dom";

const { Header } = Layout;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();


  console.log('location.pathname :>> ', location.pathname);

  return (
    <>
      <Header className="custom-navbar">
        <div className="navbar-logo">
          <img src={logo} alt="RENEW Logo" className="logo-image" />
        </div>

        <nav className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>

          <Link
            to="/about-us"
            className={`nav-link ${location.pathname === "/about-us" ? "active" : ""}`}
          >
            About US
          </Link>
          <Link
            to="/solutions"
            className={`nav-link ${location.pathname === "/solutions" ? "active" : ""}`}
          >
            Solutions
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`}
          >
            Projects
          </Link>
        </nav>

        <Button className="contact-btn">CONTACT US</Button>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <MoreOutlined />
        </button>
      </Header>

      {menuOpen && (
        <div className="mobile-menu">
          <Link
            to="/"
            className={`mobile-nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className={`mobile-nav-link ${location.pathname === "/about-us" ? "active" : ""}`}
          >
            About US
          </Link>
          <Link
            to="/solutions"
            className={`mobile-nav-link ${location.pathname === "/solutions" ? "active" : ""}`}
          >
            Solutions
          </Link>
          <Link
            to="/projects"
            className={`mobile-nav-link ${location.pathname === "/projects" ? "active" : ""}`}
          >
            Projects
          </Link>
          <Button className="mobile-contact-btn">CONTACT US</Button>
        </div>
      )}
    </>
  );
};

export default Navbar;
