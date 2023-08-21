import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-slick";
import slider1 from "/assets/images/slider-badag.jpg";
// import slider2 from "/assets/images/slider-badging.jpg";
import slider3 from "/assets/images/slider-scale.jpg";
import slider4 from "/assets/images/slider-scales.jpg";

const imgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <Carousel {...settings}>
      <div className="wrap">
        <a href="">
          <img src={slider1} alt="" />
        </a>
      </div>
      <div className="wrap">
        <a href="">
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/757BD50DDE15AEA20A1DBA02E4A7BEE497E14BB8B1E27217F6FEA384CD28256E/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim"
            alt=""
          />
        </a>
      </div>
      <div className="wrap">
        <a href="">
          <img src={slider3} alt="" />
        </a>
      </div>
      <div className="wrap">
        <a href="">
          <img src={slider4} alt="" />
        </a>
      </div>
    </Carousel>
  );
};

export default imgSlider;
