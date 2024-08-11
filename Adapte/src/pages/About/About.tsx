import logo from "../../assets/logo.jpg"

const About = () => {
  return (
    <div
      className=" h-2/6 flex flex-row gap-6 justify-center align-middle items-start
      pt-2 
      "
    >
      <div className=" w-28">
        <img className="" src={logo} alt="logo" />
      </div>

      <div className="  flex flex-col gap-4 text-left w-6/12">
        {" "}
        <h2 className=" text-2xl">QUEM SOMOS...</h2>
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
