import React from 'react'
import Component from './Component'

const HowYouCanHelp = () => {
    return (
        <div className="how-you-can-help-container">
            <h1 className="how-header">How you can help</h1>
            <div className="component-container">
                <Component location="The United Kingdom"/>
                <Component location="Outside the UK"/>
            </div>
        </div>
    )
}

export default HowYouCanHelp
