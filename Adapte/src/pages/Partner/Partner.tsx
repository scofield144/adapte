import Google from "../../assets/google-svgrepo-com.svg";
import microsoft from "../../assets/microsoft-svgrepo-com.svg";
// [658px] h-[546px]
const Partner = () => {
  return (
    <div className=" 
    flex flex-col h-[307px] bg-white justify-center  mt-[47px] md-min:rounded-lg
     tablet:flex-col gap-7 pl-4 pr-4" id="partner">
      <h1 className=" text-3xl font-bold text-left">PARCEIROS</h1>
      <div className=" flex flex-row justify-center ">
        <img className=" w-3/12 md-min:w-2/12 " src={Google} alt="google" />
        <img className=" w-3/12 md-min:w-2/12" src={microsoft} alt="google" />
      </div>
    </div>
  );
};

export default Partner;
