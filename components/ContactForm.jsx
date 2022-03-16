import React from 'react'

const ContactForm = () => {
  return (
    <div role={"form"} className="form-main">
        <h2>Please enter your information:</h2>
        <div className='form'>
            <div className='name'>
                <div className='first'><input placeholder='First name'></input></div>
                <div className='first'><input placeholder='Last name'></input></div>
            </div>
                <input placeholder='Phone'></input>
                <input placeholder='Email'></input>
        </div>
        <button>CONTINUE</button>
    </div>
  )
}

export default ContactForm