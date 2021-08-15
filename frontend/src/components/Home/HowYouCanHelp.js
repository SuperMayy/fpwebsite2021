import React from 'react'
import Component from './Component'

const HowYouCanHelp = () => {
    return (
        <div className="how-you-can-help-container">
            <h1 className="how-header">How you can help</h1>
            <div className="component-container">
                <Component location="The United Kingdom" content="Fill out one of our contact forms and then email it to us." link="forms"/>
                <Component location="Outside the UK" content="Reach out to us via our contact page" link="contact"/>
            </div>
        </div>
    )
}

export default HowYouCanHelp
