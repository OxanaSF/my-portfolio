import React from "react";
import styled from "styled-components";
import { LayoutStyled, DescriptionStyled, ImageStyled } from "../styles";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { aboutMeAnimation, aboutImgAnimation } from "./animation";

const About = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return (
    <AboutStyled ref={element}>
      <ImageAboutStyled animate={controls} variants={aboutImgAnimation}>
        <div className="about-left-img">
          <img
            src={`${process.env.PUBLIC_URL}/images/oxana_img.jpeg`}
            alt="photo of me"
          />
        </div>
      </ImageAboutStyled>

      <DescriptionAboutStyled animate={controls} variants={aboutMeAnimation}>
        <div>
          <h2>About me</h2>
          <h6>Web App & Front-end Developer</h6>
          <p className="par1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="par2">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            aute irure dolor in reprehenderit in .
          </p>
        </div>
        <div className="about-button">
          <a
            className="btn-download"
            href={`${process.env.PUBLIC_URL}/images/OxanaH_CV.pdf`}
            alt="photo of me"
            download="OxanaH_CV.pdf"
          >
            {" "}
            Download CV{" "}
          </a>
        </div>
      </DescriptionAboutStyled>
    </AboutStyled>
  );
};

const AboutStyled = styled(LayoutStyled)`
  margin: 15rem 0;
  /* background: green; */
`;

const DescriptionAboutStyled = styled(DescriptionStyled)`
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
    color: rgb(19, 18, 18);
    color: rgb(31, 30, 30);
    font-size: 1.25rem;
    font-weight: 400;
  }

  .about-button {
    margin-bottom: 17rem;
  }

  .btn-download {
    text-decoration: none;
    padding: 1.7rem 4rem;
    color: #fff;
    background-color: black;
    border-radius: 2.5rem !important;
    font-size: 1.25rem;
    letter-spacing: 0.063rem;
    letter-spacing: 1.5px;
  }
`;

const ImageAboutStyled = styled(motion.ImageStyled)`
  img {
    height: 70vh;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export default About;
