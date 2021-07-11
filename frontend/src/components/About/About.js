import React from 'react'
import about from '../../media/about-header-pic.png'
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
                <h1 className="our-story-header">Our Story</h1>
                <dic className="time-line">
                    <div className="timeline-left">
                      <div className="timelline-content one">
                          <div className="timeline-text-area">
                            <h3>Heading</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>
                    </div>
                    <div className="timeline-center">
                    </div>
                    <div className="timeline-right">
                      <div className="timelline-content two">
                         <div className="timeline-text-area">
                            <h3>Heading</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>
                      <div className="timelline-content three">
                          <div className="timeline-text-area">
                            <h3>Heading</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>
                    </div>
                </dic>
            </div>
        </div>
    )
}

export default About;
