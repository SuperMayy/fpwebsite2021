import React from 'react'
import Hand from '../../media/forms.png'
import Downloads from './Downloads'
import './forms.css'

const Forms = () => {
    return (
    <div className="fionitas-downloads"> 
      <div className="forms-text-area">
        <h1>Download a Form</h1>
        <p id="mailus">Once you've filled it out, <a href="mailto:pierre.cervello@gmail.com">email it to us.</a> Don't forget to download the appropriate documents and attach them to your email.</p>
      </div>    
      <div className="middle-form-content">
        <img src={Hand} alt="handshake cartoon" />
        <Downloads />
      </div>
    </div>
    )
}

export default Forms