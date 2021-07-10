import React from 'react'
import {Link} from 'react-router-dom'

const Recent = () => {
    return (
        <div className="recent-container">
            <h1>HELP THE NIGERIAN YOUTH THIS CHRISTMAS</h1>
            <div className="recent-card">
                <div className="picture-container"></div>
                <div className="text-container">
                    <h1 className="text-container-header">Short Description of what we did in Nigeria.</h1>
                    <Link>Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default Recent
