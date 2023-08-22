import "/assets/style.scss";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { Originals } from "./components/Originals";
import Serie from "./components/Serie";
import Movies from "./components/Movies";
import NationalGeo from "./components/NationalGeo";
import Pixar from "./components/Pixar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/DisneyplusClone/" element={<Login />} />
        <Route path="/DisneyplusClone/home" element={<Home />} />
        <Route path="/DisneyplusClone/detail/:id" element={<Detail />} />
        <Route path="/DisneyplusClone/originals" element={<Originals />} />
        <Route path="/DisneyplusClone/movies" element={<Movies />} />
        <Route path="/DisneyplusClone/series" element={<Serie />} />
        <Route
          path="/DisneyplusClone/brand/national-geographic"
          element={<NationalGeo />}
        />
        <Route path="/DisneyplusClone/brand/pixar" element={<Pixar />} />
      </Routes>
    </div>
  );
}

export default App;
