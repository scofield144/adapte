import style from './Area.module.css'

const Area = () => {
  return (
    //   w-7/12
    <div className={` flex flex-row gap-3 w-full`}>
      
      <div className={`${style.area} flex flex-col gap-3 w-6/12`}>
      <h2 className=" text-3xl">Areas de atuacao</h2>
      <h3 className=" text-3xl">Projetos de Código Aberto </h3>
      <span className=" text-2xl" >
        Focar em projetos que possam beneficiar a comunidade de forma ampla e
        contínua.
      </span></div>

    </div>
  );
};

export default Area;
