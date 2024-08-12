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

const Project = () => {
  return (
    <div
      className="flex 
    flex-col gap-3 items-start    
    "
    >
      <h2 className=" text-3xl">NOSSOS PROJETOS</h2>
      <div className=" flex flex-row gap-3">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
