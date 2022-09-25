import React from 'react'
import {Link} from 'react-router-dom'

const Recent = () => {
    return (
        <div className="recent-container">
            <h1>HELP US PROVIDE HEALTHCARE TO LOCAL PAN-AFRICAN COMMUNITIES</h1>
            <div className="recent-card">
                <div className="picture-container"></div>
                <div className="text-container">
                    <h1 className="text-container-header">
                        We are fundraising!
                    </h1>
                    <Link to="/recent">Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default Recent
