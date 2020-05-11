import React from "react";

const Contact = () => (
  <div className='contact'>
    <div className='contact-title'>CONTACT</div>
    <div className='contact-message'>
      Drop me an e-mail at christ123092@gmail.com or simply fill out the form
      below and I will reply to you soon!
    </div>
    <div className='contact-form'>
      <div>
        <input id='name-input' type='text' name='name' placeholder='Name' />
      </div>
      <div>
        <input
          id='email-input'
          type='text'
          name='email'
          placeholder='E-mail address'
        />
      </div>
      <div>
        <textarea
          id='message-input'
          type='text'
          name='message'
          placeholder='Your message'
          rows="6" 
          cols="50"
        />
      </div>

      <button className='send-btn'>SEND</button>
    </div>
  </div>
);

export default Contact;
