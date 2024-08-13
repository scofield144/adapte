 
import style from "./nav.module.css";
import { SocialIcons } from "../../Components/Logos/socialmedia";
import { Logo } from "../../Components/Logos/adapte";
 
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex justify-between bg-magenta  items-center p-4 shadow-md">
      <Logo />
     
      <nav className="hidden laptop:flex space-x-6">
        <ul className="flex justify-center gap-4">
          <li >
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
      <div className="md-min:hidden">
        <button
          onClick={toggleMenu}
          className="text-xl focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && <MobileMenu closeMenu={closeMenu} />}
      <div className="md-max:hidden">
      <SocialIcons/>
      </div>
      
    </header>
  );
};

const MobileMenu = ({ closeMenu }) => (
  <div
    className="fixed inset-0 bg-magenta bg-opacity-98  flex flex-col items-start justify-start
    z-50 p-4"
  >
    <div className="flex flex-row justify-between items-center w-full p-2">
      <div>
        <Logo />
      </div>
      <div className="md:hidden">
        <button onClick={closeMenu} className="text-xl focus:outline-none">
          <FaTimes />
        </button>
      </div>
    </div>

    <nav className="space-y-8 text-lg ">
      <ul className={`${style.menuMob} text-left`}>  
        <li className={`${style.menuMobItem}`}>
          <a href="#about"  onClick={closeMenu}>
            QUEM SOMOS
          </a>
        </li>
        <li className={`${style.menuMobItem}`}>
          <a
            href="#project"
            
            onClick={closeMenu}
          >
            PROJETOS
          </a>
        </li>
        <li className={`${style.menuMobItem}`}>
          <a
            href="#mission"
            
            onClick={closeMenu}
          >
            NOSSA MISSÃO
          </a>
        </li>
        <li className={`${style.menuMobItem}`}>
          <a
            href="#partner"
            
            onClick={closeMenu}
          >
            PARCEIROS
          </a>
        </li>
        <li className={`${style.menuMobItem}`}>
          <a
            href="#contact"
            
            onClick={closeMenu}
          >
            CONTACTOS
          </a>
        </li>
      </ul>
    </nav>
  </div>
);


export default Nav;
