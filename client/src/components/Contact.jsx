import React, { useState } from 'react';
import axios from 'axios';

const Contact = ({ contact }) => {

  const [input, setInput] = useState({ name: '', email: '', message: '' });

  const changeHandler = () => {
    setInput(input => ({ ...input, [event.target.name]: event.target.value }));
  };

  const sendMessage = () => {
    if (input.name !== '' && input.email !== '' && input.message !== '') {
      axios
        .post("/api/form", input)
        .then(() =>
          alert("Thank you for your message. I will reply to you soon!")
        )
        .catch(err => console.error(err));
      setInput({ name: '', email: '', message: '' });
    } else {
      for (var key in input) {
        if (input[key] === '') {
          alert(`Please fill out your ${key}!`);
          break;
        }
      }
    }
  };

  return (
    <div className="contact">
      <div className="contact-title">CONTACT</div>
      <div className="contact-message">{contact}</div>
      <div className="contact-form">
        <div>
          <input
            id="name-input"
            type="text"
            name="name"
            placeholder="Name"
            value={input.name}
            onChange={() => changeHandler()}
          />
        </div>
        <div>
          <input
            id="email-input"
            type="text"
            name="email"
            placeholder="E-mail address"
            value={input.email}
            onChange={() => changeHandler()}
          />
        </div>
        <div>
          <textarea
            id="message-input"
            type="text"
            name="message"
            placeholder="Your message"
            rows="6"
            cols="50"
            value={input.message}
            onChange={() => changeHandler()}
          />
        </div>
        <button className="send-btn" onClick={() => sendMessage()}>
          SEND
        </button>
      </div>
    </div>
  );
};

export default Contact;
