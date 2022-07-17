import { Routes, Route } from "react-router-dom";
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
