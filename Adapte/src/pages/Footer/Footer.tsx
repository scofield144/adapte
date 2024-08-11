import style from "./Footer.module";

const Footer = () => {
  return (
    <div className=" flex flex-col gap-4">
    <div className=" border-t border-black"></div>
    <div className=" h-10"><ul className=" flex justify-center gap-4">
        <li>
          <a href="http://"> QUEM SOMOS</a>
        </li>
        <li>
          <a href="http://"> PROJETOS</a>
        </li>
        <li>
          <a href="http://"> NOSSA MISSÃO</a>
        </li>
        <li>
          <a href="http://"> PARCEIROS</a>
        </li>
        <li>
          <a href="http://"> POLITICA DE PRIVACIDADE</a>
        </li>
        <li>
          <a href="http://"> TERMOS DE UTILIZACAO</a>
        </li>
        <li>
          <a href="http://"> CONTACTOS</a>
        </li>
      </ul></div>
      
    </div>
  );
};
export default Footer;
