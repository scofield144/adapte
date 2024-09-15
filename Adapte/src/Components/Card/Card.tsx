// import Button from "../Button/button";
import Button from "../Button/button";
import style from "./Card.module.css";




interface ComponentProject {
  id?:number,
  title: string;
  content:string;
  link:string;
}

const Card:React.FC<ComponentProject> = ({title,content,link}) => {
  return (
    <div
      className={`${style.card}`}
    >
      <h2 className="">{title}</h2>
      <div className={style.line}></div>
      <span className="">
        {content}
       </span>
       <Button address={link} />
       
    </div>
  );
};

export default Card;
