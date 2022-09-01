import React from "react";
import Typed from "react-typed";


import { motion } from "framer-motion";
import {
  lastNameAnimation,
  firstNameAnimation,
  typedAnimation,
  heroImageAnimation,
} from "../animation";

import {
  HeroStyled,
  HeroDescriptionStyled,
  HeroImageStyled
} from './HeroStyles.js'

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



export default Hero;
