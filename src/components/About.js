import React from "react";
import styled from "styled-components";
import { LayoutStyled, DescriptionStyled, ImageStyled } from "../styles";

const About = () => {
  return (
    <AboutStyled>
      <ImageStyled>
        <div className="about-left-img">
          <img
            src={`${process.env.PUBLIC_URL}/images/oxana_img.jpeg`}
            alt="photo of me"
          />
        </div>
      </ImageStyled>

      <DescriptionStyled>
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
      </DescriptionStyled>
    </AboutStyled>
  );
};

const AboutStyled = styled(LayoutStyled)`
  margin: 15rem 0;
  background: green;
`;

const ImageAboutStyled = styled(ImageStyled)`

`;

export default About;
