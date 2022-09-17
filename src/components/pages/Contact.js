import React from 'react';
import { useState } from 'react';
import '../../assets/css/style3.css'

export default function Contact() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const inputType = e.target.name;
    const inputValue = e.target.value

    if (inputType === 'name') {
      setName(inputValue);
    }
    else if (inputType === 'email') {
      setEmail(inputValue);
    }
    else setMessage(inputValue);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setName('');
    setEmail('');
    setMessage('');
  };

  return (

    <div class= "section-flex">
        <h2>Contact</h2>
        <div class= "section-flex">
            <form class= "section-flex">
                <div>
                    <input name='name' type="name" onChange={handleInputChange} value={name} placeholder="name" />
                </div>
                <div>
                    <input name='email' type="email" onChange={handleInputChange} value={email} placeholder="email" />
                </div>
                <div>
                    <textarea name='message' onChange={handleInputChange} value={message} rows="3" placeholder=' message'></textarea>
                </div>
                <button type="submit" onClick={handleFormSubmit}>Submit</button>
            </form>
        </div>
  </div>
  );
}