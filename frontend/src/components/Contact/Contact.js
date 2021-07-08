import React from 'react';
import Form from './Form.js'
import {Link} from 'react-router-dom';
import './contact.css';
import contact from '../../media/contact.png'

const Contact = () => {
    return (
        <div className="contact">
            <img className="contact-page-left" src={contact} alt="contact"/>
            <div className="contact-page-right">
              <div className="contact-content">
                <h2>Contact Us</h2>
                <p>Email us at <a href = "mailto: admin@fionitasproject.org" style={{color: "#80FFCC"}}>
                    admin@fionitasproject.org.</a> Don't forget to download the appropriate 
                    <Link style={{color: "#80FFCC"}}> documents</Link> and attach them. Or you can use our contact form below.
                </p>
              </div>
              <Form />
            </div>
        </div>
    )
}

export default Contact;
