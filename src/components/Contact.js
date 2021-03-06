
import React, { useRef } from 'react';
import styled from "styled-components";
import emailjs from '@emailjs/browser';

const YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID
const YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID
const YOUR_PUBLIC_KEY = process.env.REACT_APP_API_KEY


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      YOUR_SERVICE_ID, 
      YOUR_TEMPLATE_ID, 
      form.current, 
      YOUR_PUBLIC_KEY
      )
      .then((result) => {
          console.log(result.text);
          console.log('message sent')
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <ContactStyled>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </ContactStyled>
  );
};

export default Contact;



const ContactStyled = styled.section`
  text-align: center;
  width: 600px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;

