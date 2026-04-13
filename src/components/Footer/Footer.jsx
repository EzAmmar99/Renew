// import "./Footer.css";

// import Logo from "../../assets/Logo.svg";
// import TopIllustration from "../../assets/Group (2).svg";
// import LeafA from "../../assets/Group.svg";
// import LeafB from "../../assets/Group (1).svg";

// const Footer = () => {
//   return (
//     <footer className="footer-hero">
//       <div className="green-area" aria-hidden="true">
//         <svg
//           viewBox="0 0 1068 599"
//           preserveAspectRatio="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="
//               M 0 173
//               C 35 212, 78 245, 130 268
//               C 188 293, 246 305, 330 318
//               C 415 331, 486 317, 548 300
//               C 620 280, 700 258, 790 240
//               C 885 223, 982 216, 1068 228
//               L 1068 599
//               L 0 599
//               Z
//             "
//             fill="#4B823C"
//           />
//         </svg>
//       </div>

//       <div className="top-illustration">
//         <img src={TopIllustration} alt="Eco illustration" />
//       </div>

//       <div className="footer-content">
//         <div className="footer-main">
//           <div className="logo-wrap">
//             <img src={Logo} alt="Renew Logo" />
//           </div>

//           <div className="right-side">
//             <div className="social-block">
//               <div className="social-title">Follow US</div>

//               <div className="social-icons">
//                 <a href="#" aria-label="X">
//                   <i className="bi bi-twitter-x"></i>
//                 </a>
//                 <a href="#" aria-label="Facebook">
//                   <i className="bi bi-facebook"></i>
//                 </a>
//                 <a href="#" aria-label="Instagram">
//                   <i className="bi bi-instagram"></i>
//                 </a>
//                 <a href="#" aria-label="LinkedIn">
//                   <i className="bi bi-linkedin"></i>
//                 </a>
//                 <a href="#" aria-label="YouTube">
//                   <i className="bi bi-youtube"></i>
//                 </a>
//               </div>
//             </div>

//             <ul className="menu">
//               <li>
//                 <a href="#">Home</a>
//               </li>
//               <li>
//                 <a href="#">About US</a>
//               </li>
//               <li>
//                 <a href="#">Solutions</a>
//               </li>
//               <li>
//                 <a href="#">Projects</a>
//               </li>
//               <li>
//                 <a href="#">Contact US</a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <div className="copyright">Copyright 2026</div>

//           <div className="leaf-strip" aria-hidden="true">
//             <img src={LeafA} alt="" />
//             <img src={LeafB} alt="" />
//             <img src={LeafA} alt="" />
//             <img src={LeafB} alt="" />
//             <img src={LeafA} alt="" />
//             <img src={LeafB} alt="" />
//             <img src={LeafA} alt="" />
//             <img src={LeafB} alt="" />
//             <img src={LeafA} alt="" />
//             <img src={LeafB} alt="" />
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import "./Footer.css";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";

// import Logo from "../../assets/Logo.svg";
// import TopIllustration from "../../assets/Group (2).svg";
// import LeafA from "../../assets/Group.svg";
// import LeafB from "../../assets/Group (1).svg";

// const menuItems = ["Home", "About US", "Solutions", "Projects", "Contact US"];

// const socialLinks = [
//   { icon: <BsTwitterX />, label: "X", href: "#" },
//   { icon: <FaFacebookF />, label: "Facebook", href: "#" },
//   { icon: <FaInstagram />, label: "Instagram", href: "#" },
//   { icon: <FaLinkedinIn />, label: "LinkedIn", href: "#" },
//   { icon: <FaYoutube />, label: "YouTube", href: "#" },
// ];

// const leafItems = [
//   LeafA,
//   LeafB,
//   LeafA,
//   LeafB,
//   LeafA,
//   LeafB,
//   LeafA,
//   LeafB,
//   LeafA,
//   LeafB,
// ];

// export default function Footer() {
//   return (
//     <footer className="renew-footer">
//       <div className="renew-footer__shape" aria-hidden="true">
//         <svg viewBox="0 0 1440 720" preserveAspectRatio="none">
//           <path
//             d="
//               M 0 220
//               C 80 320, 190 390, 360 425
//               C 520 457, 680 430, 860 390
//               C 1020 355, 1200 310, 1440 318
//               L 1440 720
//               L 0 720
//               Z
//             "
//             fill="#4E8B3D"
//           />
//         </svg>
//       </div>

//       <div className="renew-footer__inner">
//         <div className="renew-footer__illustration">
//           <img src={TopIllustration} alt="Eco Illustration" />
//         </div>

//         <div className="renew-footer__content">
//           <div className="renew-footer__top-row">
//             <div className="renew-footer__logo">
//               <img src={Logo} alt="Renew Logo" />
//             </div>

//             <div className="renew-footer__right">
//               <div className="renew-footer__social">
//                 <h3>Follow US</h3>

//                 <div className="renew-footer__social-icons">
//                   {socialLinks.map((item, index) => (
//                     <a key={index} href={item.href} aria-label={item.label}>
//                       {item.icon}
//                     </a>
//                   ))}
//                 </div>
//               </div>

//               <ul className="renew-footer__menu">
//                 {menuItems.map((item, index) => (
//                   <li key={index}>
//                     <a href="#">{item}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className="renew-footer__bottom">
//             <p>Copyright 2026</p>

//             <div className="renew-footer__leaf-strip" aria-hidden="true">
//               {leafItems.map((leaf, index) => (
//                 <img key={index} src={leaf} alt="" />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import React from "react";
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
          <div className="renew-footer__logo">
            <img src={Logo} alt="Renew Logo" />
          </div>

          <div className="renew-footer__right">
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
