import style from "./Footer.module";

const Footer = () => {
  return (
    <footer className=" flex flex-col h-full justify-center pt-10 
    " id="footer">
    <div className=" border-t border-black"></div>
    <div className=" h-full w-full  
    ">
      <ul className="flex justify-center  md-min:h-[4rem] 
      md:flex md:flex-row md-min:gap-6 
      md-min:items-center  md-min:align-middle
    md:justify-center  ">
        {/* <li>
          <a href="#about"> QUEM SOMOS</a>
        </li>
        <li>
          <a href="#project"> PROJETOS</a>
        </li>
        <li>
          <a href="#mission"> NOSSA MISSÃO</a>
        </li>
        <li>
          <section id="#partners" > PARCEIROS</section>
        </li> */}
        <li>
          <a href="#police"> POLITICA DE PRIVACIDADE</a>
        </li>
        <li>
          <a href="#term"> TERMOS DE UTILIZACAO</a>
        </li>
        <li>
          <a href="#contact"> CONTACTOS</a>
        </li>
      </ul></div>
      
    </footer>
  );
};
export default Footer;
