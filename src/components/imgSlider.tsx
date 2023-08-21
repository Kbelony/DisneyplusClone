import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-slick";
import slider1 from "/assets/images/slider-badag.jpg";
import slider2 from "/assets/images/slider-badging.jpg";
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
          <img src={slider2} alt="" />
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
