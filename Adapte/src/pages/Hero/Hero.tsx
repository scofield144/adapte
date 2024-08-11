import styled from "../Hero/Hero.module.css";

const Hero = () => {
  return (
    <div className=" text-white">
      <div className={`${styled.backImage} flex flex-col justify-center items-center gap-2`}>
        <h1 className="  text-6xl">Bem-vindos a ADAPTE</h1>
        <h2 className=" text-3xl">
          Conheça os projeto dedicados à inovação e educação
        </h2>
        <button
          type="button"
          className=" bg-purple hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow max-w-fit "
        >
          Saber Mais
        </button>
      </div>
    </div>
  );
};
export default Hero;
