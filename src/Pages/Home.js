import { Fragment, useEffect } from "react";
import Data from "../components/Data";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <Fragment>
      <main>
        <div>
          <Data />
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
