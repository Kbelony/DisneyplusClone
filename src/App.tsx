import "../src/assets/style.scss";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/DisneyplusClone/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
