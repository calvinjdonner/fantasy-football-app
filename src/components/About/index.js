import React from 'react';
import images from '../Images/index';

function About() {
        return (
            <section className="my-5" >
                <h1 id="about">Welcome to the Premier NFL Fantasy Football and Betting App!</h1>
                <img src={Images.football} className="my-2" style={{ width: "100%" }} alt="cover" />
            </section>
        )
    }

export default About