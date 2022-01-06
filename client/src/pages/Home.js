import React from "react";
import News from "../components/News";
import Schedule from "../components/Schedule";

const Home = () => {
  return (
    <div className="container">
      <News />
      <Schedule />
    </div>
  );
};

export default Home;
