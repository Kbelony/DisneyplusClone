import NewDisney from "./NewDisney";
import { Originals } from "./Originals";
import Recommendation from "./Recommendation";
import { Viewers } from "./Viewers";
import ImgSlider from "./imgSlider";

const Home = () => {
  return (
    <div className="home-page">
      <ImgSlider />
      <Viewers />
      <Recommendation />
      <NewDisney />
      <Originals />
    </div>
  );
};

export default Home;
