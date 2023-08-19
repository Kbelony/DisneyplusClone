import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/assets/style.scss";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/DisneyplusClone/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
