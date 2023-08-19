import "../src/assets/style.scss";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/DisneyplusClone/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
