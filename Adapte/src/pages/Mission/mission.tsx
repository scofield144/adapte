import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Area from "../../Components/Areas/Area";
import { urlmission } from "./imag";

const Mission = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // <div className=" flex flex-row gap-4 " id="mission">
  // <div className=" flex flex-col items-start gap-6  ">
  //   <div className="text-left space-y-10">
  //     <h2 className="text-3xl">Missão</h2>
  //     <p className=" ">
  return (
    <div className=" flex flex-col gap-10 h-full bg-white md-min:rounded-lg
    md-min:flex md-min:flex-row md-min:gap-4 mt-[47px] pt-10 pb-10  w-full

    " id="mission">
      <div className=" flex flex-col gap-10   ">
        <div className=" pr-4 pl-4 space-y-2 text-left">
          <h2 className="text-3xl font-bold">Missão</h2>
          <p className=" ">
            Promover o desenvolvimento tecnológico e educacional acessível para
            todos.
          </p>
        </div> 
        <div className="  w-[19.1rem] md-min:w-[24rem]   ml-[2rem]">
          <h2 className=" text-3xl font-bold pb-5"> Áreas de Atuação</h2>
          <Slider {...settings} className="">
            <div>
              <Area num={1} />
            </div>
            <div>
              <Area num={2} />
            </div>
            <div>
              <Area num={3} />
            </div>
            <div>
              <Area num={4} />
            </div>
          </Slider>
        </div>
      </div>
      <div>
        <img src={urlmission} className="w-full h-full md-min:p-4 "/>
      </div>
    </div>
  );
};
export default Mission;
