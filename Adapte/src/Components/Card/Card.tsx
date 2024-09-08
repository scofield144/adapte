// import Button from "../Button/button";
import style from "./Card.module.css";




interface Project {
  id:number,
  title: string;
  content:string;
  link:string;
}

interface Project { 
  project: Project|null
}

const Card:React.FC<Project> = ({project}) => {
  return (
    <div
      className={`${style.card}`}
    >
      <h2 className="">{project?.title}</h2>
      <div className={style.line}></div>
      <span className="">
        {project?.content}
       </span>
       <button
type="button"
className=" w-full bg-Black hover:bg-Black text-white py-2 px-4 rounded-lg shadow max-w-fit "
>
Saber Mais
</button>
    </div>
  );
};

export default Card;
