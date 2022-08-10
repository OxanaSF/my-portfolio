import styled from 'styled-components';
import { LayoutStyled, DescriptionStyled } from '../../styles/styles';
import { motion } from 'framer-motion';

export const AboutStyled = styled(LayoutStyled)`
  margin: 7rem 0;
  display: flex;
  /* flex-wrap: wrap; */

  .side-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    margin-right: 2rem;

    .side-icon-container {
      width: 2.7rem;
      height: 2.7rem;
      border: 0.2rem solid black;
      padding: 0.3rem;
      border-radius: 20%;
      cursor: pointer;
      display: flex;

      position: relative;
      display: inline-block;

      img {
        max-width: 100%;
      }
    }
    .side-icon-container-about {
      border: 0.2rem solid #007bff;
      border: 0.2rem solid #2b5876;
      box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
    }
  }

  @media (max-width: 1300px) {
    grid-template-columns: 50% 50%;
    margin: 3rem 0;
  }

  @media (max-width: 1100px) {
    padding: 0 0 5rem 0;
    display: block;
    .side-bar {
      flex-direction: row;
      width: 50%;
      margin: auto;
      margin-top: 2rem;
    }
  }
`;

export const DescriptionAboutStyled = styled(DescriptionStyled)`
  padding: 0 10rem;
  justify-content: space-around;

  h2 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 3.75rem;
  }

  h6 {
    color: rgb(31, 30, 30);
    font-size: 1.3rem;
    letter-spacing: 0.056rem;

    padding-bottom: 3.125rem;
    border-bottom: 0.063rem solid rgb(226, 224, 224);
    margin-bottom: 3rem;
  }

  p {
    line-height: 2.7rem;
    letter-spacing: 0.063rem;
    color: rgb(31, 30, 30);
    font-size: 1.25rem;
    font-weight: 400;
  }

  .btn-download {
    text-decoration: none;
    padding: 1.7rem 4rem;
    color: #fff;
    background-color: black;
    border-radius: 2.5rem;
    font-size: 1.25rem;
    letter-spacing: 0.063rem;
    letter-spacing: 1.5px;
    margin-top: 5rem;

    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  .btn-download:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    background-image: linear-gradient(
      to right,
      #29323c,
      #485563,
      #2b5876,
      #4e4376
    );
    box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
  }

  @media (max-width: 1400px) {
    justify-content: center;
    justify-content: flex-start;
    padding: 0 2rem 2rem 3rem;
    margin-top: 4rem;

    .about-button {
      margin-top: 4rem;
      align-self: flex-start;
    }

    @media (max-width: 1100px) {
      h2,
      h6 {
        text-align: center;
      }

      .about-button {
        margin-top: 4rem;
        align-self: center;
      }

      .btn-download {
        display: flex;
        margin-top: 0;
      }
    }
  }
`;

export const ImageAboutStyled = styled(motion.ImageStyled)`
  img {
    height: 70vh;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    @media (max-width: 1100px) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      width: 100%;
      height: 60vh;
      object-fit: cover;
    }
  }
`;
