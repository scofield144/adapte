import Google from "../../assets/google-svgrepo-com.svg";
import microsoft from "../../assets/microsoft-svgrepo-com.svg";

const Partner = () => {
  return (
    <>
      <h1 className=" text-3xl text-start">PARCEIROS</h1>
      <div className=" flex flex-row justify-center">
        <img className=" w-60 " src={Google} alt="google" />
        <img className=" w-60 " src={microsoft} alt="google" />
      </div>
    </>
  );
};

export default Partner;
