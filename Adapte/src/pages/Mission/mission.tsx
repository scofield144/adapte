import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Area from "../../Components/Areas/Area";

const Mission = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className=" flex flex-col items-start gap-3 ">
        <h2 className="text-3xl">Missão</h2>
        <p>
          Promover o desenvolvimento tecnológico e educacional acessível para
          todos.
        </p>
      </div>
      <div>
        <h2 className=" text-3xl">Areas de atuacao</h2>
        <Slider {...settings}>
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
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </>
  );
};
export default Mission;
