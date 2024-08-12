import Card from "../../Components/Card/Card";

const projects = [
  {
    id: 1,
    title: "Mentoria",
    content:
      "Um programa para apoiar jovens do ensino médio no desenvolvimento pessoal e acadêmico por meio de mentoria",
    link: "#",
  },
  {
    id: 2,
    title: "WhatCV",
    content:
      "Um serviço que permite aos usuários gerar currículos de forma rápida e simples através de mensagens no WhatsApp",
    link: "#",
  },
  {
    id: 3,
    title: "ESM",
    content:
      "Um aplicativo que conecta pacientes com médicos para consultas domiciliares e cuidados de saúde personalizados.",
    link: "#",
  },
  {
    id: 4,
    title: "AJH",
    content:
      "Uma plataforma online que conecta voluntários e doadores a iniciativas de ajuda humanitária em Angola, especialmente em resposta a desastres naturais e outras crises",
    link: "#",
  },
];
//h-[558.46px]
const Project = () => {
  return (
    <div id="project"
      className="flex 
    flex-col justify-around h-full
    items-center gap-6  pt-10
    "
    >
      {/* flex flex-row gap-3  justify-center 
      tablet:flex-col tablet:items-center */}
      <h2 className=" text-3xl text-start">NOSSOS PROJETOS</h2>
      <div className="  grid grid-cols-1   tablet:grid-cols-2 
      laptop:grid-cols-3 desktop:grid-cols-4 gap-4 ">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
