import logo from "../../assets/logo.png";
import style from "./About.module.css";

const About = () => {
  return (
    <div
      className=" flex flex-row gap-3 
      justify-center  items-start h-96
      "
    >
      <div className={style.img}>
        <img className="" src={logo} alt="logo" />
      </div>

      <div className=" pt-20 flex flex-col gap-4 text-left w-6/12">
        {" "}
        <h2 className=" text-3xl">QUEM SOMOS</h2>
        <p>
          Associação de Desenvolvimento e Apoio Profissional em Tecnologias e
          Educação (ADAPTE) é uma organização sem fis lucrativos, que visa
          promover o fomento do empreendedorismo por meio da educação e a
          inclusão tecnológica junto à sociedade angolana.
        </p>
        <button
          type="button"
          className=" bg-purple hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow max-w-fit "
        >
          Saber Mais
        </button>
      </div>
    </div>
  );
};

export default About;
