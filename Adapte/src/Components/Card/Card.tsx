import style from "./Card.module.css";




interface Project {
  id:number,
  title: string;
  content:string;
  link:string;
}



const Card = ({project}:Project) => {
  return (
    <div
      className={`${style.card} justify-evenly`}
    >
      <h2 className="">{project.title}</h2>
      <div className={style.line}></div>
      <span className="">
        {project.content}
        {/* Subject to status. UK residents only. PayPal is a responsible lender.
        Pay in 3 performance may influence your credit score. T&Cs apply. */}
      </span>
      <button
        type="button"
        className=" bg-purple hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow max-w-fit "
      >
        Saber Mais
      </button>
    </div>
  );
};

export default Card;
