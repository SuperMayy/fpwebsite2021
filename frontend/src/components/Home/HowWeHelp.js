import React from 'react'
import Card from '../generalComponents/Card'

const HowWeHelp = () => {
    return (
        <div className="how-we-help">
            <h1>HOW WE HELP</h1>
            <div className="card-container">
                <Card name="The United Kingdom" extraClass="one"/>
                <Card name="Kenya" extraClass="two"/>
                <Card name="Nigeria" extraClass="three"/>
                <Card name="Remote" extraClass="four"/>
            </div>
        </div>
    )
}

export default HowWeHelp
