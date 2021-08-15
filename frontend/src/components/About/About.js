import React from 'react'
import about from '../../media/about-header-pic.png'//portfolio
import portfolio from '../../media/portfolio.pdf'
import './about.css'

const About = () => {
    return (
        <div>
            <div className="about-landing">
            <h1>About Us | <a href={portfolio} download style={{color: "white"}}>Our Portfolio</a></h1>
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
                            <h3>Growing</h3>
                            <p>The organisation began in 2013 as a small project which primarily focused on improving the standards 
                              in educational institutions, in destitute communities in Nigeria. However, it has now embarked into an 
                              organisation that will benefit communities internationally. This includes training, adequate healthcare, 
                              emergency services, and health awareness. In addition, the organisation aims for mandatory first aid 
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
                            <p>Fionita's project started with teaching first aid in underprivileged communities, whilst providing life-saving 
                              medical equipment in where required. This has been a global effort. The organisation was formed due to an increased demand for first 
                              aid knowledge in underprivileged areas, to decrease untimely deaths and observe an overall growth of 
                            social mobility.</p>
                          </div>
                      </div>
                      <div className="timelline-content three">
                          <div className="timeline-text-area">
                            <h3>Aiming for the stars</h3>
                            <p>The key objectives of our workshops are based on the ‘ripple’ principle where knowledge can be passed 
                              from students to family members. FP acknowledges the risks involved. However, the benefit of saving 
                              a life far outweighs and mitigates 
                              the risk. FP will continue to maintain a relationship with all project participants via networking. 
                              Additionally, we belive that the ‘ripple’ effect can slowly reduce deaths within communities. 
                              The organisation will provide the appropriate facilities to enable 
                              good practice and rigorous training will be conducted.</p>
                          </div>
                      </div>
                    </div>
                </dic>
            </div>
        </div>
    )
}

export default About;
