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
    <div className=" flex flex-col gap-10 h-full 
    md-min:flex md-min:flex-row md-min:gap-4  pt-10

    " id="mission">
      <div className=" flex flex-col gap-6  ">
        <div className="space-y-10 md-min:text-left">
          <h2 className="text-3xl">Missão</h2>
          <p className=" ">
            Promover o desenvolvimento tecnológico e educacional acessível para
            todos.
          </p>
        </div>
        <div className="w-[340px] md:w-full ">
          <h2 className=" text-3xl font-bold">Areas de atuacao</h2>
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
        <img src={urlmission} className="w-full h-full"/>
      </div>
    </div>
  );
};
export default Mission;
