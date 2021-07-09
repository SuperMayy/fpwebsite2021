import React from 'react'
import IMG3 from '../../media/needle.jpeg'

const HomePageInfo = () => {
    return (
        <div className="homepage-info">
            <div className="info-row">
                <div className="info-column">
                    <div className="block-colour"></div>
                    <img alt="placeholder" src={IMG3}></img>
                </div>
                <div className="info-column">
                    <h1 data-aos="fade-left">
                        We want to empower our students
                    </h1>
                    <p className="info-main">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br> sed do eiusmod tempor incididunt ut labore et dolore <br></br> magna aliqua.
                    </p>
                    <p className="info-sub">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br></br> tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomePageInfo
