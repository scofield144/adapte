// import style from "./Footer.module";

const Footer = () => {
  return (
    <footer className=" flex flex-col h-[112px] justify-center pt-7  bg-Black text-white mt-[47px]
    " id="footer">
    
      <ul className="flex justify-center w-full pr-4 pl-4  md-min:h-[4rem] 
      md:flex md:flex-row md-min:gap-6 
      md-min:items-center  md-min:align-middle
    md:justify-center 
    
    ">
      
        <li>
          <a href="#police"> POLITICA DE PRIVACIDADE</a>
        </li>
        <li>
          <a href="#term"> TERMOS DE UTILIZACAO</a>
        </li>
        <li>
          <a href="#contact"> CONTACTOS</a>
        </li>
      </ul>      
    </footer>
  );
};
export default Footer;
