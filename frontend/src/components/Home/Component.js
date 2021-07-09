import React from 'react'
import { Link } from 'react-router-dom'

const Component = ({location}) => {
    return (
        <div className="component">
            <h1>{location}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididunt ut labore 
                et dolore...</p>
                <Link to="/">Read More</Link>
        </div>
    )
}

export default Component
