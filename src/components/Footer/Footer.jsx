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
import footerGroop from "../../assets/footer-groop.png";

const menuItems = ["Home", "About US", "Solutions", "Projects", "Contact US"];

const socialLinks = [
  { icon: <BsTwitterX />, label: "X", href: "#" },
  { icon: <FaFacebookF />, label: "Facebook", href: "#" },
  { icon: <FaInstagram />, label: "Instagram", href: "#" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", href: "#" },
  { icon: <FaYoutube />, label: "YouTube", href: "#" },
];

/**
 * Wave top boundary (viewBox 0 0 1440 260). Green fill is below this path.
 * Landscape valley silhouette (unchanged — approved curve).
 */
const FOOTER_WAVE_PATH =
  "M0 95 " +
  "C 120 210 320 255 560 240 " +
  "C 760 228 980 185 1180 150 " +
  "C 1300 128 1380 118 1440 132 " +
  "L 1440 260 L 0 260 Z";
export default function Footer() {
  return (
    <footer className="renew-footer" role="contentinfo">
      {/* 1) Large light (cream) band — illustration lives here only */}
      <div className="renew-footer__sky">
        <div className="renew-footer__art" aria-hidden="true">
          <img src={TopIllustration} alt="" />
        </div>
      </div>

      {/* 2) Green wave slab — tall enough to read as curved mass, not a hairline */}
      <div className="renew-footer__wave-shell" aria-hidden="true">
        {/* <svg
          className="renew-footer__wave-svg"
          viewBox="0 0 1440 260"
          preserveAspectRatio="none"
          focusable="false"
        >
          <path className="renew-footer__wave-fill" d={FOOTER_WAVE_PATH} />
        </svg> */}
        <svg
          className="renew-footer__wave-svg"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          focusable="false"
        >
          <path className="renew-footer__wave-fill" d="M767.5 173.5C1114.68 81.189 1382.33 51.5 1489.5 77.5V576H-2V0C122.333 137.833 468.5 253 767.5 173.5Z" />
        </svg>
      </div>

      {/* 3) Solid green footer surface — logo / nav / social sit lower in this band */}
      <div className="renew-footer__surface">
        <div className="renew-footer__surface-inner">
          <div className="renew-footer__primary">
            <div className="renew-footer__logo">
              <img src={Logo} alt="Renew" />
            </div>

            <nav className="renew-footer__nav" aria-label="Footer navigation">
              <ul className="renew-footer__menu">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div
              className="renew-footer__social"
              aria-labelledby="renew-footer-follow"
            >
              <h3 id="renew-footer-follow">Follow US</h3>
              <div className="renew-footer__social-icons">
                {socialLinks.map((item, index) => (
                  <a key={index} href={item.href} aria-label={item.label}>
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="renew-footer__ground">
            <p className="renew-footer__copyright">Copyright 2026</p>
            <div
              className="renew-footer__leaf-strip"
              aria-hidden="true"
              style={{
                "--footer-leaf-strip": `url(${footerGroop})`,
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
