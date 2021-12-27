import React from 'react';
import coverImage from "../../assets/cover/nfl.jpg";

function About() {
    return (
        <section className="my-5" >
            <h1 id="about">Welcome to the Premier NFL Fantasy Football and Betting App!</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <div className="my-2">
            </div>
        </section>
    )
}

export default About