import { Routes, Route } from "react-router-dom";
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="text-textIfLight dark:text-textIfDark">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
