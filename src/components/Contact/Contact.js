import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  ContactStyled,
  ContactContainerStyled,
  SideBarStyled,
} from './ContactStyles';
import { motion } from 'framer-motion';

import {
  sideBarIconHomeFromRight,
  sideBarIconUserFromRight,
  sideBarIconProjectsFromRight,
  sideBarIconContactFromRight,
} from '../animation';

import { AnimatePresence } from 'framer-motion';
import { useScroll } from '../useScroll';

import Modal from '../Modal/Modal';

const YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;
const YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
const YOUR_PUBLIC_KEY = process.env.REACT_APP_API_KEY;

const Contact = () => {
  const form = useRef();
  const [element, controls] = useScroll();
  const [emailSent, setEmailSent] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (emailSent) {
      setOpenModal(true);
    }

    setTimeout(() => {
      setOpenModal(false);
    }, 4000);
  }, [emailSent]);

  return (
    <AnimatePresence>
      <ContactContainerStyled ref={element} id="contact">
        {!openModal && (
          <ContactStyled>
            <div className="contact-header">
              <h1 id="scroll-gallery">Contact Me</h1>
            </div>

            <form ref={form} onSubmit={sendEmail} className="form">
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </ContactStyled>
        )}

        {openModal && (
          <ContactStyled>
            <Modal closeModal={setOpenModal} />
          </ContactStyled>
        )}

        <SideBarStyled className="side-bar">
          <motion.div
            className="side-icon-container"
            animate={controls}
            variants={sideBarIconHomeFromRight}
          >
            <a href="#top">
              <img
                className="side-icon home-icon"
                src={`${process.env.PUBLIC_URL}/images/home2.png`}
                alt="home icon"
              />
            </a>
          </motion.div>

          <motion.div
            className="side-icon-container"
            animate={controls}
            variants={sideBarIconUserFromRight}
          >
            <a href="#about">
              <img
                className="side-icon user-icon"
                src={`${process.env.PUBLIC_URL}/images/user.png`}
                alt="user icon"
              />
            </a>
          </motion.div>

          <motion.div
            className="side-icon-container"
            animate={controls}
            variants={sideBarIconProjectsFromRight}
          >
            <a href="#projects">
              <img
                className="side-icon option"
                src={`${process.env.PUBLIC_URL}/images/option.png`}
                alt="option icon"
              />
            </a>
          </motion.div>

          <motion.div
            id="contact-icon"
            className="side-icon-container side-icon-container-letter"
            animate={controls}
            variants={sideBarIconContactFromRight}
          >
            {/* <a href="#"> */}
            <img
              className="side-icon letter"
              src={`${process.env.PUBLIC_URL}/images/letter.png`}
              alt="letter icon"
            />
            {/* </a> */}
          </motion.div>
        </SideBarStyled>
      </ContactContainerStyled>
    </AnimatePresence>
  );
};

export default Contact;
