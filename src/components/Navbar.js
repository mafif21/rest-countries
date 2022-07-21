import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [dark, setDark] = useState(false);

  const themeHandler = () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      document.body.style.backgroundColor = "#202D36";
      setDark(true);
    } else {
      document.body.style.backgroundColor = "#FAFAFA";
      setDark(false);
    }
  };

  return (
    <div className="bg-white py-7 px-5 shadow-md flex justify-between items-center lg:px-20 dark:bg-elementDark dark:text-textIfDark">
      <div className="brand">
        <h1 className="font-semibold">Where in the world?</h1>
      </div>

      <button className="flex gap-x-2 items-center" onClick={() => themeHandler()}>
        {dark ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
        <h3 className="text-xs font-semibold lg:text-sm">Dark Mode</h3>
      </button>
    </div>
  );
};

export default Navbar;
