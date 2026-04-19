import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import Logo from "../../assets/Logo.svg";
import TopIllustration from "../../assets/footer-art.svg";
import LeafStripSrc from "../../assets/Group (1).svg";

const menuItems = ["Home", "About US", "Solutions", "Projects", "Contact US"];

const socialLinks = [
  { icon: <BsTwitterX />, label: "X", href: "#" },
  { icon: <FaFacebookF />, label: "Facebook", href: "#" },
  { icon: <FaInstagram />, label: "Instagram", href: "#" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", href: "#" },
  { icon: <FaYoutube />, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="renew-footer">
      <div className="renew-footer__shape" aria-hidden="true">
        <svg viewBox="0 0 1440 720" preserveAspectRatio="none">
          <path
            d="
              M0 188
              C 220 298, 420 348, 620 318
              C 820 288, 1040 228, 1440 248
              L 1440 720
              L 0 720
              Z
            "
            fill="#4D813F"
          />
        </svg>
      </div>

      <div className="renew-footer__inner">
        <div className="renew-footer__illustration">
          <img src={TopIllustration} alt="" aria-hidden="true" />
        </div>

        <div className="renew-footer__content">
          <div className="renew-footer__main">
            <div className="renew-footer__logo">
              <img src={Logo} alt="Renew" />
            </div>

            <div className="renew-footer__social" aria-labelledby="renew-footer-follow">
              <h3 id="renew-footer-follow">Follow US</h3>
              <div className="renew-footer__social-icons">
                {socialLinks.map((item, index) => (
                  <a key={index} href={item.href} aria-label={item.label}>
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            <ul className="renew-footer__menu">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="renew-footer__bottom">
            <p>Copyright 2026</p>
            <div
              className="renew-footer__leaf-strip"
              aria-hidden="true"
              style={{
                "--leaf-strip-src": `url(${LeafStripSrc})`,
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
