import Card from "../../Components/Card/Card";

const projects = [
  {
    id: 1,
    title: "Mentoria",
    content:
      "Um programa para apoiar jovens do ensino médio no desenvolvimento pessoal e acadêmico por meio de mentoria",
    link: "https://www.facebook.com/profile.php?id=61564223186228",
  },
  {
    id: 2,
    title: "WhatCV",
    content:
      "Um serviço que permite aos usuários gerar currículos de forma rápida e simples através de mensagens no WhatsApp",
    link: "https://www.facebook.com/profile.php?id=61564223186228",
  },
  {
    id: 3,
    title: "ESM",
    content:
      "Um aplicativo que conecta pacientes com médicos para consultas domiciliares e cuidados de saúde personalizados.",
    link: "https://www.facebook.com/profile.php?id=61564223186228",
  },
  {
    id: 4,
    title: "AJH",
    content:
      "Uma plataforma online que conecta voluntários e doadores a iniciativas de ajuda humanitária em Angola, especialmente em resposta a desastres naturais e outras crises",
    link: "https://www.facebook.com/profile.php?id=61564223186228",
  },
];
//h-[558.46px]
const Project: React.FC = () => {
  return (
    <section id="project"
      className="flex 
    flex-col justify-around h-full pb-10
    items-center gap-6  pt-10 md-min:mt-10 min:mt-10 md-min:rounded-lg
    md-min:bg-white
    "
    >
      <header className=" text-3xl text-left font-bold">NOSSOS PROJETOS</header>
      <div className="  grid grid-cols-1   tablet:grid-cols-2 
      laptop:grid-cols-3 desktop:grid-cols-4 gap-4 ">
        {projects.map((project) => (
          <Card 
          key={project.id}
          title={project.title} 
          content={project.content} 
          link={project.link}/>
        ))}
      </div>
    </section>
  );
};

export default Project;
