import React from 'react'
import IMG1 from '../../media/needle.jpeg'
import IMG2 from '../../media/signs.jpg'
import { HashLink } from 'react-router-hash-link';

const Hero = () => {
    return (
        <div className="homepage">
            <div className="homepage-hero">
                <h1>
                     Teaching Life <br></br> Saving Skills
                </h1>
                <p>
                    All life is precious, which is why we must learn <br></br>
                    how to prevent it's loss. From Nigeria, to Kenya, <br></br>
                    to the UK. we help those in need.
                </p>
                <HashLink to="/#donate-here"><button >
                    MAKE A DIFFERENCE
                </button></HashLink>
                <img alt="injection" className="image1-home" src={IMG1}></img>
                <img alt="group with certificates" className="image2-home" src={IMG2}></img>
            </div>
          </div>
    )
}

export default Hero
