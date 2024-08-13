import logo from "../../assets/logwhite.jpg";
import Button from "../../Components/Button/button";
import style from "./About.module.css";
//h-[428.46px]
// flex flex-row gap-3 //  rounded-[30px] shadow max-w-fit 
// justify-center  items-start  h-full
const About = () => {
  return (
    <div id="about"
      className=" bg-white w-full m-auto bg-purple       
      flex flex-col items-center md-min:flex md-min:flex-row gap-3 
      md-min:rounded-lg
      justify-center  md-min:items-start h-full pt-10 mt-[47px]  "
    >
      <div className={`${style.img} md-max:hidden`}>
        <img className=" w-[17rem] " src={logo} alt="logo" />
      </div>

      <div className=" w-full md-min:w-[38rem] flex flex-col text-left gap-5 py-3 px-6">
        {" "}
        <h2 className=" text-3xl  md-min:text-left font-bold">QUEM SOMOS</h2>
        <p className="md-min:text-left ">
          Associação de Desenvolvimento e Apoio Profissional em Tecnologias e
          Educação (ADAPTE) é uma organização sem fis lucrativos, que visa
          promover o fomento do empreendedorismo por meio da educação e a
          inclusão tecnológica junto à sociedade angolana.
        </p>
       <Button/>
      </div>
    </div>
  );
};
//pt-20 flex flex-col gap-6 text-left w-6/12
export default About;
