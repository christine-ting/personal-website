import React from 'react';

const Contact = () => (
  <div className="contact">
    <div className="contact-title">
      CONTACT
    </div>
    <div>
      Drop me an e-mail at christ123092@gmail.com or simply fill out the form below and I will reply to you soon!
    </div>
    <div className="contact-form">
      <div id="input">
        <input id="name-input" type="text" name="name" placeholder="Name"/>
      </div>
      <div id="input">
        <input id="email-input" type="text" name="email" placeholder="E-mail address"/>
      </div>
      <div id="input">
        <input id="message-input" type="text" name="message" placeholder="Your message"/>
      </div>
      <button className="send-btn">SEND</button>
    </div>
  </div>
);

export default Contact;