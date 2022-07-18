import { Routes, Route } from "react-router-dom";
// import Detail from "./Pages/Detail";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
