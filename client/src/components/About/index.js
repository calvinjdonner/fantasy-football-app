import React from 'react';
import footballImages from '../Images/index';
import '../../index.css';

function About() {
    const randomImage =
        footballImages[Math.floor(Math.random() * footballImages.length)];
    console.log(randomImage);

    return (
        <hero className="my-5" >
            <h1 id="about">Welcome to the Premier NFL Fantasy Football and Betting App!</h1>
            {/* <img src={require('../../assets/cover/beast.jpg')} alt="football's greatest plays" className="footballPics"/> */}
        </hero>
    )
}

export default About