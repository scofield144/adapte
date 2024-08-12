import logo from "../../assets/logo.png";
import Button from "../../Components/Button/button";
import style from "./About.module.css";
//h-[428.46px]
// flex flex-row gap-3 
// justify-center  items-start  h-full
const About = () => {
  return (
    <div id="about"
      className="flex flex-col items-center md-min:flex md-min:flex-row gap-3 
      justify-center  md-min:items-start h-full pt-10"
    >
      <div className={style.img}>
        <img className=" w-[17rem] " src={logo} alt="logo" />
      </div>
{/* w-[26rem] */}
      <div className=" w-full md-min:w-[26rem] flex flex-col gap-5 ">
        {" "}
        <h2 className=" text-3xl  md-min:text-left">QUEM SOMOS</h2>
        <p className="md-min:text-left">
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
