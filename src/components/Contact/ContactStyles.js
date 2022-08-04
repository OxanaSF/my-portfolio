import styled from "styled-components";


export 
const ContactStyled = styled.section`
  text-align: center;
  width: 70%;
  margin: 15% auto;

  .contact-header {
    h1 {
      /* background-color: #f8f9fa; */
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
      margin-bottom: 0.3rem;
    }
    input[type="submit"] {
      height: 4rem;
      margin-top: 2rem;
      cursor: pointer;
      background: black;
      color: white;
      border: none;
      letter-spacing: 0.1rem;
    }
  }
`;