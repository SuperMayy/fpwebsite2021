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
                    The project involves teaching first aid in underprivileged communities, whilst providing life-saving medical equipment in educational institutions, religious institutions, hospitals, government offices and other public settings where required. This will be a global effort, as the project will be done in various British and African locations. 
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
