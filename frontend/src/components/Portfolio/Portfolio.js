import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import IMG1 from '../../media/portfolio1.jpg'
import IMG2 from '../../media/portfolio2.jpg'
import IMG3 from '../../media/portfolio3.jpg'
import IMG4 from '../../media/portfolio4.jpg'
import IMG5 from '../../media/portfolio5.jpg'
import IMG6 from '../../media/portfolio6.jpg'

const Portfolio = () => {
    return (
        <div>
            <Carousel autoPlay={false} emulateTouch={true} infiniteLoop={true}>
                <div>
                    <img src={IMG1} alt="portfolio page 1"/>
                </div>
                <div>
                    <img src={IMG2} alt="portfolio page 2"/>
                </div>
                <div>
                    <img src={IMG3} alt="portfolio page 3"/>
                </div>
                <div>
                    <img src={IMG4} alt="portfolio page 4"/>
                </div>
                <div>
                    <img src={IMG5} alt="portfolio page 5"/>
                </div>
                <div>
                    <img src={IMG6} alt="portfolio page 6"/>
                </div>
            </Carousel>
        </div>
    )
}

export default Portfolio
