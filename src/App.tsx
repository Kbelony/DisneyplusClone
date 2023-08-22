import "/assets/style.scss";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/DisneyplusClone/" element={<Login />} />
        <Route path="/DisneyplusClone/home" element={<Home />} />
        <Route path="/DisneyplusClone/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
