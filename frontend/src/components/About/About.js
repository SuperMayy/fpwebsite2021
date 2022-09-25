import React from 'react'
// import { Player } from 'video-react';
// import portfolio from '../../media/portfolio.pdf'
import HowWeHelp from '../Home/HowWeHelp';
import about from '../../media/about-header-pic.png'
import './about.css'
import {Link} from 'react-router-dom';

const About = () => {
  const howWeHelpData = [
    {
      name: "Dr. Fiona Igwe ",
      extraClass: "five",
      link: null,
      noLink: true,
      description: `Dr. Fiona Igwe is the founder of Founder of Fionita’s Project and advocate for health equity. 
      Fiona was also instrumental in the decision of UEA Vice-Chancellor David Richardson to Advance-HE’s Race Equality Charter in October 2018. Alongside leading the ‘Decolonising UEA’ campaign, she is the mind behind Eradicate Hate [an anti-racism campaign] and an anonymous reporting system enabling students and staff to report hate crimes attributed to race.
      `
    },
    {
      name: "Ruth Hayles",
      extraClass: "six",
      link: "kenya",
      noLink: true,
      description: `Ruth Hayles sits on the board of directors as our secretary. She is a King’s College London alumna and has more than 30 years working experience within senior roles.
      Ruth shares with Fionita her extensive transferable skills, experience and expertise drawn from a wide cross-section of specialist areas. Ruth uses her vast array of honed skills to support, guide and maintain Fionita’s growth, development, and success.
      `
    },
    {
      name: "Victor Amadigwe ",
      extraClass: "seven",
      link: "nigeria",
      noLink: true,
      description: `Victor Amadigwe sits on the board of directors as the Legal Advisor for Fionita’s Project. He is a senior solicitor and director at a London based Law Centre. Victor is a philanthropist and has given back to various communities in the UK and Nigeria, he is also an advocate for homelessness in London. `
    },
    {
      name: "Dr. Ibe Nathans",
      extraClass: "eight",
      link: "remote",
      noLink: true,
      description: `Dr. Ibe Nathans sits on the board of directors as our Medical Officer. He is a practicing GP Consultant with Beechwood Medical Centre, London, UK, and is also involved in humanitarian, free medical missions and medical education and awareness and medical advocacy.`
    }
  ]
    return (
        <div>
            <div className="about-landing">
            <h1>About Us | <Link to="/portfolio" style={{color: "white"}}>View Our Portfolio</Link></h1>
            <img 
            className="about-landing"
            src={about}
            alt="collage"
            />
            <HowWeHelp data={howWeHelpData} title="OUR FOUNDER & DIRECTORS"/>
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
