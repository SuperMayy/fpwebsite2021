import React from 'react'
import { Link } from 'react-router-dom'

const Component = ({location, content, link}) => {
    return (
        <div className="component">
            <h1>{location}</h1>
            <p>{content}</p>
                <Link to={`/${link}`}>Next Steps {">"}</Link>
        </div>
    )
}

export default Component
