import React, {useState} from 'react'
import axios from 'axios'

const Form = () => {
    const [values, setValues] = useState({
        fullname: '',
        email:'',
        reason:''
    });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        setValues({
            ...values,
            [name]: value
        })

        console.log(values)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(values.fullname && values.email && values.reason){
            setValid(true)
            setSubmitted(true)

            const payload = {
                fullname: values.fullname,
                email: values.email,
                reason: values.reason
            }

            axios({
                url: '/api/sent',
                method: 'POST',
                data: payload
            })
            .then(()=>{
                console.log('Data has been sent to the server')
            })
            .catch(()=>{
                console.log('Internal server error')
            })   
        } else {
            alert('Please fill out all the form fields')
        }
    }

    return (
        <>
            <form className="contact-form" onSubmit={handleSubmit}>
                {submitted && valid ? 
              <div className="success-message">
                  Success! Your message has been submitted.
              </div> : null
              }
              <input 
              type="text" 
              id="fullname" 
              name="fullname" 
              placeholder="Full Name" 
              value={values.fullname}
              onChange={handleInputChange}
              />
              { submitted && !values.fullname ? 
              <span className="form-validation">Please enter your full name</span>: null }
              <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Email" 
              value={values.email}
              onChange={handleInputChange}
              />
              { submitted && !values.email ? 
              <span className="form-validation">Please enter your email address</span> : null}
              <textarea 
              id="reason" 
              name="reason" 
              placeholder="Reason"
              value={values.reason} 
              onChange={handleInputChange}
              />
              { submitted && !values.reason ? 
              <span className="form-validation">Please enter your reason for contacting us</span>: null}
              <button className="send-contact-details">Send</button>
            </form>
        </>
    )
}

export default Form
