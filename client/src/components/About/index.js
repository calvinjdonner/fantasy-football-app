import React, { Component } from 'react';
import ReactDom from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-response-carousel';
import footballImages from '../Images/index';

class FootballCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={footballImages[0]} />
                    <p className="beast">Legend 1</p>
                </div>
                <div>
                    <img src={footballImages[1]} />
                    <p className="butler">Legend 2</p>
                </div>
                <div>
                    <img src={footballImages[2]} />
                    <p className="catch">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

ReactDom.render(<FootballCarousel />);

// const About = ({ slides }) => {
//     const [current, setCurrent] = useState({
//         activeSlide: 0,
//         transition: 0.45,
//         transiting: false,
//     });

//     const length = slides.length;

//     const nextSlide = () => {
//         setCurrent(current === length - 1 ? 0 : current + 1);
//     };

//     const prevSlide = () => {
//         setCurrent(current === 1 ? length - 1 : current - 1);
//     }

//     console.log(current)

//     if(!Array.isArray(slides) || slides.length <= 0) {
//         return null;
//     }

//     return (
//         <section className='slider'>
//             <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
//             <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
//             {footballImages.map((slide, index) => {
//                 return (
//                     <div className={index === current ? 'slide active' : 'slide'} key={index}>
//                         {index === current && (<img src ={slide.image} alt='travel' className='image' />)}
//                     </div>
//                 )
//             })}
//         </section>
//     );
// };

export default About;