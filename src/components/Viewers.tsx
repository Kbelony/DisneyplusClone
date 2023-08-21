import viewers1 from "/assets/images/viewers-disney.png";
import viewers2 from "/assets/images/viewers-marvel.png";
import viewers3 from "/assets/images/viewers-pixar.png";
import viewers4 from "/assets/images/viewers-national.png";
import viewers5 from "/assets/images/viewers-starwars.png";
import videos1 from "/assets/videos/1564674844-disney.mp4";
import videos2 from "/assets/videos/1564676115-marvel.mp4";
import videos3 from "/assets/videos/1564676714-pixar.mp4";
import videos4 from "/assets/videos/1564676296-national-geographic.mp4";
import videos5 from "/assets/videos/1608229455-star-wars.mp4";

export const Viewers = () => {
  return (
    <div className="viewers-component">
      <div className="container mt-8 grid gap-6">
        <div className="wrap">
          <img src={viewers1} alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={videos1} type="video/mp4" />
          </video>
        </div>
        <div className="wrap">
          <img src={viewers2} alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={videos2} type="video/mp4" />
          </video>
        </div>
        <div className="wrap">
          <img src={viewers3} alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={videos3} type="video/mp4" />
          </video>
        </div>
        <div className="wrap">
          <img src={viewers5} alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={videos5} type="video/mp4" />
          </video>
        </div>
        <div className="wrap">
          <img src={viewers4} alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={videos4} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};
