import React from "react";
import Typed from "react-typed";
import styled from "styled-components";
import { LayoutStyled, DescriptionStyled, ImageStyled } from "../../styles/styles";
import { motion } from "framer-motion";
import {
  lastNameAnimation,
  firstNameAnimation,
  typedAnimation,
  heroImageAnimation,
} from "../animation";

const Hero = () => {
  return (
    <HeroStyled>
      <HeroDescriptionStyled>
        <motion.h1 className="last-name" variants={lastNameAnimation}>
          Howard
        </motion.h1>
        <motion.h1 className="first-name" variants={firstNameAnimation}>
          Oxana
        </motion.h1>

        <motion.div variants={typedAnimation}>
          <Typed
            className="typed-text"
            strings={["Front-end Developer", "React Developer"]}
            typeSpeed={60}
            backSpeed={100}
            loop
          />
        </motion.div>
      </HeroDescriptionStyled>

      <HeroImageStyled>
        <motion.img
          variants={heroImageAnimation}
          src={`${process.env.PUBLIC_URL}/images/computer_and_hands.jpg`}
          alt="computer with female hands"
        />
      </HeroImageStyled>
    </HeroStyled>
  );
};




const HeroStyled = styled(LayoutStyled)`
  @media (max-width: 1300px) {
    display: block;
    position: relative;
  }
`;

const HeroDescriptionStyled = styled(DescriptionStyled)`
  transform: translateX(50%);

  h1 {
    text-transform: uppercase;
    font-size: 9rem;
    letter-spacing: 0.25rem;
    font-weight: 700;
    color: white;

    @media (max-width: 1300px) {
      font-size: 5rem;
      letter-spacing: 0.15rem;
    }
  }

  .last-name {
    mix-blend-mode: multiply;
    text-shadow: -0.063rem 0 black, 0 0.063rem black, 0.063rem 0 black,
      0 -0.063rem black;
  }

  .first-name {
    color: black;
    font-family: "Roboto", sans-serif;
  }

  .typed-text {
    margin-left: 0.938rem;
  }

  /* First and Last Names Animation on hover */
  .last-name::before,
  .first-name::before {
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  .last-name:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .last-name::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: hsl(10, 2%, 90%);
    text-shadow: -0.063rem 0 black, 0 0.063rem black, 0.063rem 0 black,
      0 -0.063rem black;
    z-index: -1;
    transition: transform 0.3s ease;
  }

  .last-name,
  .first-name {
    position: relative;
  }

  /* Last Name Animation on Hover */
  .first-name:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .first-name::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: hsl(10, 2%, 90%);
    text-shadow: -0.063rem 0 black, 0 0.063rem black, 0.063rem 0 black,
      0 -0.063rem black;
    z-index: -1;
    transition: transform 0.3s ease;
  }

  @media (max-width: 1300px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const HeroImageStyled = styled(ImageStyled)`
  opacity: 0.4;
  border-bottom-left-radius: 20px;

  @media (max-width: 1300px) {
    border-bottom-left-radius: 0;
    margin: 0;
  }
`;

export default Hero;
