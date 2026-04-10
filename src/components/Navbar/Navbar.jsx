import { Layout, Button } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const { Header } = Layout;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header className="custom-navbar">
        <div className="navbar-logo">
          <img src={logo} alt="RENEW Logo" className="logo-image" />
        </div>

        <nav className="navbar-links">
          <a href="/" className="nav-link active">
            Home
          </a>
          <a href="/about-us" className="nav-link">
            About US
          </a>
          <a href="/solutions" className="nav-link">
            Solutions
          </a>
          <a href="/projects" className="nav-link">
            Projects
          </a>
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
          <a href="#" className="mobile-nav-link active">
            Home
          </a>
          <a href="#" className="mobile-nav-link">
            About US
          </a>
          <a href="#" className="mobile-nav-link">
            Solutions
          </a>
          <a href="#" className="mobile-nav-link">
            Projects
          </a>
          <Button className="mobile-contact-btn">CONTACT US</Button>
        </div>
      )}
    </>
  );
};

export default Navbar;
