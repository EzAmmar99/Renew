import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import Logo from "../../assets/Logo.svg";
import TopIllustration from "../../assets/footer-art.svg";
import footerGroop from "../../assets/footer-groop.png";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "About US", path: "/about-us" },
  { label: "Solutions", path: "/solutions" },
  { label: "Projects", path: "/projects" },
  { label: "Contact US", path: "/contact-us" },
];

const socialLinks = [
  { icon: <BsTwitterX />, label: "X", href: "#" },
  { icon: <FaFacebookF />, label: "Facebook", href: "#" },
  { icon: <FaInstagram />, label: "Instagram", href: "#" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", href: "#" },
  { icon: <FaYoutube />, label: "YouTube", href: "#" },
];


const FOOTER_WAVE_PATH =
  "M0 95 " +
  "C 120 210 320 255 560 240 " +
  "C 760 228 980 185 1180 150 " +
  "C 1300 128 1380 118 1440 132 " +
  "L 1440 260 L 0 260 Z";


export default function Footer() {
  return (
    <footer className="renew-footer">
      {/* <div className="renew-footer__top">
        <img src={TopIllustration} alt="Wind turbine illustration" className="renew-footer__art" />
      </div> */}

      <div className="renew-footer__wave">
        <svg
          className="renew-footer__wave-svg"
          viewBox="0 0 1440 260"
          preserveAspectRatio="none"
          focusable="false"
        >
          <path className="renew-footer__wave-path" d={FOOTER_WAVE_PATH} />
        </svg>
      </div>

      <div className="renew-footer__content">
        <div className="renew-footer__main">
          <div className="renew-footer__logo">
            <img src={Logo} alt="Renew" />
          </div>

          <nav className="renew-footer__nav">
            {menuItems.map((item, index) => (
              <Link key={index} to={item.path}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="renew-footer__social">
            <div className="renew-footer__social-container">
              <h3>Follow US</h3>
              <div className="renew-footer__social-icons">
                {socialLinks.map((item, index) => (
                  <a key={index} href={item.href} aria-label={item.label}>
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="renew-footer__bottom">
          <div className="renew-footer__bottom-inner">
            <p>Copyright 2026</p>
          </div>
        </div>
      </div>

      <div className="renew-footer__leaves">
        {[...Array(30)].map((_, i) => (
          <img 
            key={i} 
            src={footerGroop} 
            alt="" 
            className="renew-footer__leaf-img" 
          />
        ))}
      </div>
    </footer>
  );
}
