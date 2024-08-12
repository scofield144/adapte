// import style from "./nav.module.css";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Logo } from "../../Components/Logos/adapte";
// import { SocialIcons } from "../../Components/Logos/socialmedia";

// const Menu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={`${style.ul} flex flex-col md:flex-row justify-between items-center pl-10 pr-10 relative`}>
//       <Logo />
//       <nav className="md:flex hidden">
//         {/* Main navigation for larger screens */}
//         <ul className="flex gap-8">
//           <li>
//             <Link to="/" className="hover:text-gray-700">Home</Link>
//           </li>
//           <li>
//             <Link to="/about" className="hover:text-gray-700">About</Link>
//           </li>
//           <li>
//             <Link to="/services" className="hover:text-gray-700">Services</Link>
//           </li>
//           <li>
//             <Link to="/contact" className="hover:text-gray-700">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//       <div className="md:hidden">
//         <button
//           aria-expanded={isOpen}
//           aria-controls="mobile-menu"
//           onClick={toggleMenu}
//           className="focus:outline-none"
//           aria-label={isOpen ? "Close menu" : "Open menu"}
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//         <div
//           id="mobile-menu"
//           className={`${
//             isOpen ? "block" : "hidden"
//           } absolute top-12 right-0 bg-white shadow-md rounded-md p-4 transition-all duration-300 ease-in-out`}
//         >
//           <ul className="flex flex-col gap-4">
//             <li>
//               <Link to="/" className="hover:text-gray-700" onClick={toggleMenu}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className="hover:text-gray-700" onClick={toggleMenu}>
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link to="/services" className="hover:text-gray-700" onClick={toggleMenu}>
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className="hover:text-gray-700" onClick={toggleMenu}>
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <SocialIcons />
//     </div>
//   );
// };

// // export default Menu;

// import logo from "../../assets/logo.png";
// import facebook from "../../assets/facebook.svg";
// import instagram from "../../assets/instagram.svg";
// import style from "./nav.module.css";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

// //   <Link to="/" className="hover:text-blue-500">Home</Link>
// //   <Link to="/about" className="hover:text-blue-500">About</Link>
// //   <Link to="/services" className="hover:text-blue-500">Services</Link>
// //   <Link to="/contact" className="hover:text-blue-500">Contact</Link>
//   return (
//     <header className="flex justify-between items-center p-4  shadow-md">
//       <Logo />
//       <nav className="hidden xl:flex space-x-6">
//   <ul className="flex justify-center gap-4">
//     <li>
//       <a href="#about" className="hover:text-Blue" >QUEM SOMOS</a>
//     </li>
//     <li>
//       <a href="#project"className="hover:text-Blue">PROJETOS</a>
//     </li>
//     <li>
//       <a href="#mission"className="hover:text-blue-500">NOSSA MISSÃO</a>
//     </li>
//     <li>
//       <a href="#partner"className="hover:text-blue-500">PARCEIROS</a>
//     </li>
//     <li>
//       <a href="#contact"className="hover:text-blue-500">CONTACTOS</a>
//     </li>
//   </ul>
//       </nav>
//       <div className="md:hidden">
//         <button
//           onClick={toggleMenu}
//           className="text-xl focus:outline-none"
//           aria-label={isOpen ? "Close menu" : "Open menu"}
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>
//       {isOpen && (
//         <MobileMenu toggleMenu={toggleMenu} />
//       )}
//       <SocialIcons />
//     </header>
//   );
// };

// const MobileMenu = ({ toggleMenu }) => (
//   <div className="absolute top-16 right-4 w-48
//   bg-white border rounded-lg shadow-lg">
//     <nav className="flex flex-col space-y-4 p-4">
//       {/* <Link hrefLang="#project" className="hover:text-blue-500" onClick={toggleMenu}>
//         Home
//       </Link> */}
//       <ul className="">
//         <li>
//           <a href="#about" className="hover:text-Blue" onClick={toggleMenu} >QUEM SOMOS</a>
//         </li>
//         <li>
//           <a href="#project"className="hover:text-Blue"onClick={toggleMenu}>PROJETOS</a>
//         </li>
//         <li>
//           <a href="#mission"className="hover:text-blue-500"onClick={toggleMenu}>NOSSA MISSÃO</a>
//         </li>
//         <li>
//           <a href="#partner"className="hover:text-blue-500"onClick={toggleMenu}>PARCEIROS</a>
//         </li>
//         <li>
//           <a href="#contact"className="hover:text-blue-500"onClick={toggleMenu}>CONTACTOS</a>
//         </li>
//       </ul>
//     </nav>
//   </div>
// );

// const Logo = () => (
//   <Link to="/" aria-label="Homepage">
//     <img className="w-12 h-12" src={logo} alt="Company logo" />
//   </Link>
// );

// const SocialIcons = () => (
//   <div className="hidden md:flex space-x-4">
//     <a href="http://facebook.com" aria-label="Facebook" className="w-8 h-8">
//       <img src={facebook} alt="Facebook" />
//     </a>
//     <a href="http://instagram.com" aria-label="Instagram" className="w-8 h-8">
//       <img src={instagram} alt="Instagram" />
//     </a>
//   </div>
// );

// export default Nav;

import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import style from "./nav.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <Logo />
      <nav className="hidden laptop:flex space-x-6">
        <ul className="flex justify-center gap-4">
          <li>
            <a href="#about" className={`${style.menuItem}`}>
              QUEM SOMOS
            </a>
          </li>
          <li>
            <a href="#project" className={`${style.menuItem}`}>
              PROJETOS
            </a>
          </li>
          <li>
            <a href="#mission" className={`${style.menuItem}`}>
              NOSSA MISSÃO
            </a>
          </li>
          <li>
            <a href="#partner" className={`${style.menuItem}`}>
              PARCEIROS
            </a>
          </li>
          <li>
            <a href="#contact" className={`${style.menuItem}`}>
              CONTACTOS
            </a>
          </li>
        </ul>
      </nav>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-xl focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && <MobileMenu closeMenu={closeMenu} />}
      <SocialIcons />
    </header>
  );
};

const MobileMenu = ({ closeMenu }) => (
  <div
    className="fixed inset-0 bg-white flex flex-col items-center
   justify-center z-50"
  >
    <nav className="space-y-8 text-lg">
      <ul className="">
        <li>
          <a href="#about" className="hover:text-Blue" onClick={closeMenu}>
            QUEM SOMOS
          </a>
        </li>
        <li>
          <a href="#project" className="hover:text-Blue" onClick={closeMenu}>
            PROJETOS
          </a>
        </li>
        <li>
          <a
            href="#mission"
            className="hover:text-blue-500"
            onClick={closeMenu}
          >
            NOSSA MISSÃO
          </a>
        </li>
        <li>
          <a
            href="#partner"
            className="hover:text-blue-500"
            onClick={closeMenu}
          >
            PARCEIROS
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-blue-500"
            onClick={closeMenu}
          >
            CONTACTOS
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

const Logo = () => (
  <Link to="/" aria-label="Homepage">
    <img className="w-12 h-12" src={logo} alt="Company logo" />
  </Link>
);

const SocialIcons = () => (
  <div className="hidden md:flex space-x-4">
    <a href="http://facebook.com" aria-label="Facebook" className="w-8 h-8">
      <img src={facebook} alt="Facebook" />
    </a>
    <a href="http://instagram.com" aria-label="Instagram" className="w-8 h-8">
      <img src={instagram} alt="Instagram" />
    </a>
  </div>
);

export default Menu;