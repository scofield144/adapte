import style from "./Contact.module.css";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";

{/* <div className=" flex flex-row justify-between h-[128.46px]" id="contact">
<div className="flex-1 justify-items-start text-left gap-5">
  <h1 className="text-3xl pb-9">CONTACTE-NOS</h1> */}
const Contact = () => {
  return (
    <div className=" flex flex-col justify-around
    md-min:flex md-min:flex-row md-min:justify-between  pt-10
     h-full" id="contact">
      <div className="flex-1 gap-2  text-left">
        <h1 className="text-3xl pb-5">CONTACTE-NOS</h1>
        <p>Para mais questões, por favor contacta a equipa do ADAPTE no endereço de e-mail:</p>
        <a className=" " href="http://">geral@adapte-ao.com</a> 
      </div>
      <div >
        <h3 className="text-2xl ">Visite as nossas redes sociais</h3>
        <div className="   flex  gap-2 justify-center">
        <a href="http://" className=" w-1/12">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="http://" className=" w-1/12">
          <img src={instagram} alt="facebook" />
        </a>
      </div>
      </div>
    </div>
  );
};
export default Contact;
