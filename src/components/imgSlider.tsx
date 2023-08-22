import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
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
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <div className="wrap">
        <Link to={`/DisneyplusClone/detail/ASN0A6Q8Kg0MRUHmwtV6`}>
          <img src={slider1} alt="" />
        </Link>
      </div>
      <div className="wrap">
        <Link to={`/DisneyplusClone/detail/07PEGfVg7or7NGqmRi0y`}>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/757BD50DDE15AEA20A1DBA02E4A7BEE497E14BB8B1E27217F6FEA384CD28256E/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim"
            alt=""
          />
        </Link>
      </div>
      <div className="wrap">
        <Link to={`/DisneyplusClone/detail/70e4sQ2ZaO4SL2Wec9VZ`}>
          <img src={slider3} alt="" />
        </Link>
      </div>
      <div className="wrap">
        <Link to={`/DisneyplusClone/detail/ZedGDYI3CX4E95Wp9PON`}>
          <img src={slider4} alt="" />
        </Link>
      </div>
    </Carousel>
  );
};

export default imgSlider;
