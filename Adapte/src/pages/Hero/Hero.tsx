import styled from "../Hero/Hero.module.css";
import downIcon from '../../assets/down.svg'

const Hero = () => {
  return (
    <div className=" text-white" id="hero">
      <div className={`${styled.backImage} flex flex-col justify-center items-center gap-3`}>
        <h1 className="  text-6xl">Bem-Vindos a ADAPTE</h1>
        <h2 className=" text-3xl">
          Conheça os projeto dedicados à inovação e educação
        </h2>
        <a href="#about" className="w-10" aria-label="Down" aria-hidden="false">
          <img src={downIcon} alt="Down" />
        </a>
        
      </div>
    </div>
  );
};
export default Hero;