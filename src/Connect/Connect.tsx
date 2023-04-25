import React, { useEffect, useState } from 'react';
import { sendFormEmail } from '../Async/Async';
// require('dotenv').config()
type ConnectProps = {
}

// error handling

function About(props: ConnectProps) {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [validateInputs, setValidateInputs] = useState<boolean>(false);

  const [nameError, setNameError] = useState<string>('At least tell me your name!');
  const [emailError, setEmailError] = useState<string>('Please tell me how to contact you!');
  const [messageError, setMessageError] = useState<string>('Please at least say hello...');

  const sendInputEmail = async () => {
    setValidateInputs(true);
    if (isTextValid(name) && isTextValid(message) && isTextValid(email) && isEmailFormatValid(email)) {
      await sendFormEmail(name, email, message);
      setValidateInputs(false);
      setName('');
      setEmail('');
      setMessage('');
      setNameError('At least tell me your name!');
      setEmailError('Please tell me how to contact you!')
      setMessageError('Please at least say hello...');
    }   
  }

  const validateName = (inputValue: HTMLInputElement["value"]) => {
    const value: string = inputValue?.toString() ?? '';
    if (!isTextValid(value)) {
        setNameError('At least tell me your name!');
    } else {
      setNameError('');
    }
    setName(value)
  }

  const validateEmail = (inputValue?: HTMLInputElement["value"]) => {
    const value: string = inputValue?.toString().trim() ?? '';
    if (!isTextValid(value)) {
      setEmailError('Please tell me how to contact you!');
    } else if (!isEmailFormatValid(value)) {
      setEmailError('Sorry, incorrect email format...');
    } else {
      setEmailError('');
    }
    setEmail(value);
  }

  const validateMessage = (inputValue?: HTMLInputElement["value"]) => {
    const value: string = inputValue?.toString() ?? '';
    if (!isTextValid(value)) {
      setMessageError('Please at least say hello...');
    } else {
      setMessageError('');
    }
    setMessage(value);
  }

  const isTextValid = (text: string) => {
    return text?.length > 0
  }

  const isEmailFormatValid = (text: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(text);
  }

  return (
    <div className="connect sliding-page">
      <div className="connect-info">
        <h3>Connect</h3>
        <h2>Reach Out!</h2>
        <br />
        <p>Whether I'm seeking opportunities or not, I'm always open to making new connections! 
          <br />
          <br/>
          Please reach out if you have any questions or just want to say hi.
        </p>

      </div>
      <form className='connect-form'>
        <label htmlFor='name-input'>Name</label>
        <input id='name-input' maxLength={50} onChange={e => validateName(e.target.value)} value={name}></input>
        {(validateInputs && messageError.length > 0) && <p className="name-warning">{nameError}</p>}
        <label htmlFor='email-input'>Email</label>
        <input id='email-input' maxLength={50} onChange={e => validateEmail(e.target.value)} value={email}></input>
        {(validateInputs && emailError) && <p className="email-warning">{emailError}</p>}
        <label htmlFor='message-input'>Message</label>
        <textarea id='message-input' onChange={e => validateMessage(e.target.value)} value={message}></textarea>
        {(validateInputs && messageError.length > 0) && <p className="message-warning">{messageError}</p>}
        <div className="connect-bar">
          <a className='connect-button' onClick={sendInputEmail}>Connect</a>
          <svg className='submit-path' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="18" height="18" viewBox="0 0 97.103 97.104"
            >
              <path d="M93.82,0.37c-0.697-0.469-1.6-0.494-2.32-0.066L3.388,52.585c-0.748,0.444-1.158,1.291-1.043,2.152
                c0.113,0.86,0.732,1.571,1.568,1.805l22.389,6.233c0.68,0.188,1.409,0.036,1.956-0.41l35.768-29.219L39.075,64.993
                c-0.301,0.382-0.462,0.854-0.462,1.339v28.602c0,0.966,0.636,1.814,1.563,2.083c0.201,0.06,0.405,0.087,0.607,0.087
                c0.728,0,1.425-0.366,1.83-1.004l15.577-24.45l22.772,6.338c0.598,0.167,1.24,0.067,1.764-0.271
                c0.521-0.339,0.873-0.885,0.967-1.499L94.753,2.493C94.878,1.665,94.515,0.838,93.82,0.37z"
              />
          </svg>
        </div>
      </form>
    </div>
  );
}

export default About;
