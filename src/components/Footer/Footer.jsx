import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import Logo from "../../assets/Logo.svg";
import TopIllustration from "../../assets/Group (2).svg";
import LeafA from "../../assets/Group.svg";
import LeafB from "../../assets/Group (1).svg";

const menuItems = ["Home", "About US", "Solutions", "Projects", "Contact US"];

const socialLinks = [
  { icon: <BsTwitterX />, label: "X", href: "#" },
  { icon: <FaFacebookF />, label: "Facebook", href: "#" },
  { icon: <FaInstagram />, label: "Instagram", href: "#" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", href: "#" },
  { icon: <FaYoutube />, label: "YouTube", href: "#" },
];

const leafItems = [
  LeafA,
  LeafB,
  LeafA,
  LeafB,
  LeafA,
  LeafB,
  LeafA,
  LeafB,
  LeafA,
  LeafB,
];

export default function Footer() {
  return (
    <footer className="renew-footer">
      <div className="renew-footer__shape" aria-hidden="true">
        <svg viewBox="0 0 1440 720" preserveAspectRatio="none">
          <path
            d="
              M 0 220
              C 85 330, 220 410, 470 430
              C 640 444, 820 410, 980 378
              C 1125 350, 1260 320, 1440 320
              L 1440 720
              L 0 720
              Z
            "
            fill="#4F8E3B"
          />
        </svg>
      </div>

      <div className="renew-footer__inner">
        <div className="renew-footer__illustration">
          <img src={TopIllustration} alt="Eco Illustration" />
        </div>

        <div className="renew-footer__content">
          <div className="renew-footer__top-row">
            <div className="renew-footer__logo">
              <img src={Logo} alt="Renew Logo" />
            </div>

            <div className="renew-footer__social">
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

          <ul className="renew-footer__menu">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>

          <div className="renew-footer__bottom">
            <p>Copyright 2026</p>

            <div className="renew-footer__leaf-strip" aria-hidden="true">
              {leafItems.map((leaf, index) => (
                <img key={index} src={leaf} alt="" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
