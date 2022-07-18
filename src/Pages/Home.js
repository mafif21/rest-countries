import { Fragment } from "react";
import Data from "../components/Data";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>

      <main>
        <Data />
      </main>
    </Fragment>
  );
};

export default Home;
