import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import style from "./nav.module.css";

const Nav = () => {
  return (
    <div
      className={`${style.ul} flex flex-row justify-between
                  items-center p-2`}>      
    <div>
        <img className=" w-20 h-20" src={logo} alt="logo" />
      </div>
      <ul className="flex justify-center gap-4">
        <li>
          <a href="http://">QUEM SOMOS</a>
        </li>
        <li>
          <a href="http://">PROJETOS</a>
        </li>
        <li>
          <a href="http://">NOSSA MISSÃO</a>
        </li>
        <li>
          <a href="http://">PARCEIROS</a>
        </li>
        <li>
          <a href="http://">CONTACTOS</a>
        </li>
      </ul>
      <div className="h-20 flex gap-5 items-center">
        <a href="http://" className="w-10">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="http://" className="w-10">
          <img src={instagram} alt="facebook" />
        </a>
      </div>
    </div>
  );
};
export default Nav;