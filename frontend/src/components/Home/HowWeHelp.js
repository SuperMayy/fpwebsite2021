import React from 'react'
import Card from '../generalComponents/Card'

const HowWeHelp = () => {
    return (
        <div className="how-we-help">
            <h1>HOW WE HELP</h1>
            <div className="card-container">
                <Card name="The United Kingdom" extraClass="one" link="uk"/>
                <Card name="Kenya" extraClass="two" link="kenya"/>
                <Card name="Nigeria" extraClass="three" link="nigeria"/>
                <Card name="Remote" extraClass="four" link="remote"/>
            </div>
        </div>
    )
}

export default HowWeHelp
