import React from 'react'
import about from '../../media/about.png'
import './about.css'

const About = () => {
    return (
        <div>
            <div className="about-landing">
            <h1>About</h1>
            <img 
            className="about-landing"
            src={about}
            alt="collage"
            />
            </div>
            <div className="out-story">
                <h1>Our Story</h1>
            </div>
        </div>
    )
}

export default About;
