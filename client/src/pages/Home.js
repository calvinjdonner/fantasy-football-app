import React, { useState } from "react";
import About from "../components/About";
import Schedule from "../components/Schedule";
import Join from "../components/Join";

const Home = () => {
    return (
        <div className = "container">
            <About />
            <Schedule />
            <Join />
        </div>
    );
};

export default Home;