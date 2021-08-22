import React from 'react'
import './generalStyle.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import IMG1 from '../../media/nigerian-workers.jpeg'
import IMG2 from '../../media/nigeria-workshop.jpeg'
import IMG3 from '../../media/nigerian-worker.jpeg'

const Powerpoint = () => {

    return (
        <div className="powerpoint">
            <Carousel autoPlay={true} infiniteLoop={true} interval={2000}>
                <div>
                    <img src={IMG1} alt="fionita's project nigerian volunteers"/>
                </div>
                <div>
                    <img src={IMG2} alt="fionita's project nigerian workshop"/>
                </div>
                <div>
                    <img src={IMG3} alt="fionita's project nigerian volunteer"/>
                </div>
            </Carousel>
        </div>
       
    )
}

export default Powerpoint
