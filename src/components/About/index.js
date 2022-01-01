import React from 'react';
import footballImages from '../Images/index';

function About() {
    const randomImage =
        footballImages[Math.floor(Math.random() * footballImages.length)];
    console.log(randomImage);

    return (
        <section className="my-5" >
            <h1 id="about">Welcome to the Premier NFL Fantasy Football and Betting App!</h1>
            {/* <img source={randomImage} className="my-2" height={200} width={200} alt="cover" /> */}
            <img src={require('../../assets/cover/beast.jpg')} alt="football image" />
        </section>
    )
}

export default About