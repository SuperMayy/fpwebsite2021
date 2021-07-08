import React from 'react'

const Form = () => {
    return (
        <>
            <form className="contact-form">
              <input type="text" id="fullname" name="fullname" placeholder="Full Name" />
              <input type="email" id="email" name="email" placeholder="Email" />
              <textarea id="reason" name="raeson" placeholder="Reason"></textarea>
            </form>
        </>
    )
}

export default Form
