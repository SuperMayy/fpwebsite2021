import React from 'react'
import Card from '../generalComponents/Card'

const HowWeHelp = () => {
    return (
        <div className="how-we-help">
            <h1>HOW WE HELP</h1>
            <div className="card-container">
                <Card name="The United Kingdom"/>
                <Card name="Kenya"/>
                <Card name="Nigeria"/>
                <Card name="Remote"/>
            </div>
        </div>
    )
}

export default HowWeHelp
