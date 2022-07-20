import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [dark, setDark] = useState(true);

  return (
    <div className="bg-white py-7 px-5 shadow-md flex justify-between items-center lg:px-20">
      <div className="brand">
        <h1 className="font-semibold">Where in the world?</h1>
      </div>

      <div className="flex gap-x-3 items-center">
        {dark ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
        <h3 className="text-xs font-semibold lg:text-sm">Dark Mode</h3>
      </div>
    </div>
  );
};

export default Navbar;
// tinggal ngasih icon di class dark mode
