import Button from "../Button/button";
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
       </span>
      <Button/>
    </div>
  );
};

export default Card;
