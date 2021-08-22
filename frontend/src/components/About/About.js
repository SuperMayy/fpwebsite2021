import React from 'react'
// import { Player } from 'video-react';
// import portfolio from '../../media/portfolio.pdf'
import about from '../../media/about-header-pic.png'
import './about.css'
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="about-landing">
            <h1>About Us | <Link to="/portfolio" style={{color: "white"}}>View Our Portfolio</Link></h1>
            <img 
            className="about-landing"
            src={about}
            alt="collage"
            />
            {/* <Player
            className="about-landing"
            playsInline
            poster="/assets/poster.png"
            src={FPvideo}
            /> */}
            </div>
            <div className="out-story">
                <h1 className="our-story-header">Our Story</h1>
                <dic className="time-line">
                    <div className="timeline-left">
                      <div className="timelline-content one">
                          <div className="timeline-text-area">
                            <h3>Growing</h3>
                            <p>The organisation began in 2013 as a small project which primarily focused on improving the standards 
                              in destitute communities in Nigeria. However, it has now embarked into an 
                              organisation that will benefit communities internationally. The organisation aims for mandatory first aid 
                              sessions in African countries and to encourage individuals to pass their knowledge on.</p>
                          </div>
                      </div>
                    </div>
                    <div className="timeline-center">
                    </div>
                    <div className="timeline-right">
                      <div className="timelline-content two">
                         <div className="timeline-text-area">
                            <h3>An Idea</h3>
                            <p>This has been a global effort. The organisation was formed due to an increased demand for first 
                              aid knowledge in underprivileged areas, to decrease untimely deaths and observe an overall growth of 
                            social mobility.</p>
                          </div>
                      </div>
                      <div className="timelline-content three">
                          <div className="timeline-text-area">
                            <h3>Aiming for the stars</h3>
                            <p>The key objectives of our workshops are based on the ‘ripple’ principle where knowledge can be passed 
                              from students to family members. FP will continue to maintain a relationship with all project participants via networking. 
                              Additionally, we belive that the ‘ripple’ effect can reduce deaths within communities. 
                              The organisation will provide the appropriate facilities to enable 
                              good practice and rigorous training.</p>
                          </div>
                      </div>
                    </div>
                </dic>
            </div>
        </div>
    )
}

export default About;
