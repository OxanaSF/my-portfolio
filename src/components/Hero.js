import React from "react";
import Typed from "react-typed";
import styled from "styled-components";
import { LayoutStyled, DescriptionStyled, ImageStyled } from "../styles";
import { motion } from "framer-motion";

const Hero = () => {
  const lastNameAnimation = { 
    hidden: {opacity: 0},
    show: { opacity: 1, transition: { duration: 3 }} 
  }

  const firstNameAnimation = { 
    hidden: {opacity: 0},
    show: { opacity: 1, transition: { duration: 3, delay: 1.2 }} 
  }

  const typedAnimation = { 
    hidden: {opacity: 0},
    show: { opacity: 1, transition: { duration: 3, delay: 1.7 }} 
  }


  return (
    <HeroStyled>
      <HeroDescriptionStyled>
        <motion.h1
          variants={lastNameAnimation}
          initial="hidden"
          animate="show"
      
          className="last-name"
        >
          Howard
        </motion.h1>
        <motion.h1
          variants={firstNameAnimation}
          initial="hidden"
          animate="show"

          className="first-name"
        >
          Oxana
        </motion.h1>

        <motion.div
          variants={typedAnimation}
          initial="hidden"
          animate="show"
        >
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
        <img
          src={`${process.env.PUBLIC_URL}/images/computer_and_hands.jpg`}
          alt="computer with female hands"
        />
      </HeroImageStyled>
    </HeroStyled>
  );
};

const HeroStyled = styled(LayoutStyled)``;

const HeroDescriptionStyled = styled(DescriptionStyled)`
  transform: translateX(50%);

  h1 {
    text-transform: uppercase;
    font-size: 8rem;
    letter-spacing: 0.25rem;
    font-weight: 700;
    color: white;
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
    background: hsl(30, 2%, 73%);
    /* background: hsl(10, 2%, 90%); */
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
    background: hsl(30, 2%, 73%);
    text-shadow: -0.063rem 0 black, 0 0.063rem black, 0.063rem 0 black,
      0 -0.063rem black;
    z-index: -1;
    transition: transform 0.3s ease;
  }
`;
const HeroImageStyled = styled(ImageStyled)`
  opacity: 0.4;
`;

export default Hero;
