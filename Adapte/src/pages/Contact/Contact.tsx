import style from "./Contact.module.css";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";

const Contact = () => {
  return (
    <div className=" flex flex-row justify-between">
      <div className="flex-1 justify-items-start text-left gap-3">
        <h1 className="text-3xl">CONTACTE-NOS</h1>
        <p>Para mais questões, por favor contacta a equipa do ADAPTE no endereço de e-mail:</p>
        <a className=" text-Red" href="http://">geral@adapte-ao.com</a> 
      </div>
      <div >
        <h3 className="text-2xl">Visite as nossas redes sociais</h3>
        <div className="  h-20 flex gap-5 items-center">
        <a href="http://" className=" w-10">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="http://" className=" w-10">
          <img src={instagram} alt="facebook" />
        </a>
      </div>
      </div>
    </div>
  );
};
export default Contact;
