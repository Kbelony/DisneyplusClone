import NewDisney from "./NewDisney";
import { Originals } from "./Originals";
import Recommendation from "./Recommendation";
import { Viewers } from "./Viewers";
import ImgSlider from "./imgSlider";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { useEffect } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import Trending from "./Trending";
import Serie from "./Serie";
import Movies from "./Movies";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends: unknown[] = [];
  let newDisneys: unknown[] = [];
  let originals: unknown[] = [];
  let trending: unknown[] = [];
  let serie: unknown[] = [];
  let movies: unknown[] = [];

  useEffect(() => {
    console.log("hello");
    const q = query(collection(db, "movies"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(recommends);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;

          case "serie":
            serie = [...serie, { id: doc.id, ...doc.data() }];
            break;

          case "movies":
            movies = [...movies, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
          serie: serie,
          movies: movies,
        })
      );
    });

    return () => {
      unsubscribe();
    };
  }, [userName]);

  return (
    <div className="home-page">
      <ImgSlider />
      <Viewers />
      <Recommendation />
      <Trending />
      <NewDisney />
      <Originals />
      <Serie />
      <Movies />
    </div>
  );
};

export default Home;
