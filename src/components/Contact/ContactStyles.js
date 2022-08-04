import styled from 'styled-components';
import { motion } from 'framer-motion';



export const ContactContainerStyled = styled(motion.div)`
  display: flex;
`;

export const SideBarStyled = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding-right: 2rem;

  .side-icon-container {
      width: 3rem;
      height: 3rem;
      border: 0.2rem solid black;
      padding: 0.3rem;
      border-radius: 20%;
      cursor: pointer;
      display: flex;
      

      position: relative;
      display: inline-block;

      img {
        width: 100%;
      }
    }

    .side-icon-container-letter {
      border: 0.2rem solid  #007bff;
    }
`;


export const ContactStyled = styled(motion.section)`
  text-align: center;
  width: 70%;
  margin: 15% auto;

  .contact-header {
    h1 {
      display: grid;
      justify-items: start;
      font-size: 4.75rem;
      font-size: 3.75rem;
      margin-bottom: 0rem;
      text-transform: uppercase;
      font-weight: 700;
      padding-bottom: 3.125rem;
    }
  }

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 3rem;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid #17e5be;
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
        border: 2px solid #17e5be;
    }
    label {
      margin-top: 1rem;
      margin-bottom: 0.3rem;
      letter-spacing: 0.1rem;
    }
  }
    input[type='submit'] {
      height: 4rem;
      margin-top: 2rem;
      cursor: pointer;
      background: black;
      color: white;
      border: none;
      letter-spacing: 0.2rem;
      font-size: 1rem;
    }
  

  }
`;
