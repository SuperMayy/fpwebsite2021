import React from 'react'
import {Link} from 'react-router-dom';

const Card = ({name}) => {
    return (
        <div className="card-body">
            <div className="card-top"></div>
            <div className="card-bottom">
                <h3 className="country">{name}</h3>
                <Link to="/">Learn More ›</Link>
            </div>
        </div>
    )
}

export default Card
