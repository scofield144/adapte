import style from "./Area.module.css";
const area = [
  {
    id: 1,
    title: "Projetos de Código Aberto",
    content:
      " Focar em projetos que possam beneficiar a comunidade de forma ampla e        contínua.",
  },
  {
    id: 2,
    title: "Iniciativas Tecnológicas Aplicadas",
    content:
      "Desenvolver soluções práticas em setores críticos, como saúde e educação e outros. ",
  },
  {
    id: 3,
    title: "Capacitação Técnica e Treinamento ",
    content:
      " Oferecer cursos de qualidade e workshops para capacitar os indivíduos em habilidades demandadas no mercado de trabalho.",
  },
  {
    id: 4,
    title: "Mentoria e Suporte",
    content:
      " Fornecer orientação e apoio a indivíduos em suas jornadas educacionais e profissionais.",
  },
];
const Area = (props: { num: number }) => {
  const { num } = props;
  const c = area[num - 1];

  return (
    //   w-7/12
    <div className={` flex flex-row gap-3 w-full`}>
      <div className={`${style.area} flex flex-col gap-3 w-6/12`}>
        <h3 className=" text-3xl"> {c?.title || "Área não encontrada"} </h3>
        <span className=" text-2xl">
          {" "}
          {c?.content || "Conteúdo não disponível"}{" "}
        </span>
      </div>
    </div>
  );
};

export default Area;
