import React, { useState } from 'react';
import footballImages from '../Images/index';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const About = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 1 ? length - 1 : current - 1);
    }

    console.log(current)

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {footballImages.map((slide, index) => {
                return (
<<<<<<< HEAD
                    <div id ="hero" className={index === current ? 'slide active' : 'slide'} key={index}>
=======
                    <div id="hero" className={index === current ? 'slide active' : 'slide'} key={index}>
>>>>>>> 2afcf9caa703b88ad377c5ad1c69c797ad7e6fd5
                        {index === current && (<img src ={slide.image} alt='travel' className='image' />)}
                    </div>
                )
            })}
        </section>
    );
};

export default About;