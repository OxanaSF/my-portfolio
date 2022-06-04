import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import VerticalCarousel from "./VerticalCarousel";
import HorizontalCarousel from "./HorizontalCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faLaptop } from "@fortawesome/free-solid-svg-icons";

const Projects = (props) => {
  const [isMobale, setIsMobale] = useState(false);

  const switchMobalDesctopHandler = () => {
    setIsMobale(!isMobale);
  };

  const desctopDisplay = (
    <div
      type="button"
      onClick={switchMobalDesctopHandler}
      className="btn-desktop-mobale"
    >
      <div className="portfolio-icons portfolio-icons-left">
        <FontAwesomeIcon
          className="portfolio-icon icon-mobale"
          icon={faMobile}
        />

        <span>View the Mobile Version</span>
      </div>
    </div>
  );

  const mobaleDisplay = (
    <div
      type="button"
      onClick={switchMobalDesctopHandler}
      className="btn-desktop-mobale"
    >
      <div className="portfolio-icons">
        <FontAwesomeIcon
          className="portfolio-icon icon-desktop"
          icon={faLaptop}
        />
        <span>View the Desktop Version</span>
      </div>
    </div>
  );

  return (
    <ProjectsStyled id="projects">
      <div className="portfolio-title">Portfolio</div>

      <h1 id="scroll-gallery">
        Projects
      </h1>

      {!isMobale && desctopDisplay}
      {!isMobale && <HorizontalCarousel />}

      {isMobale && mobaleDisplay}
      {isMobale && <VerticalCarousel />}
    </ProjectsStyled>
  );
};

const ProjectsStyled = styled(motion.section)`
  background-color: #f8f9fa;
  text-transform: uppercase;
  text-align: center;
  padding-top: 6.25rem;
  padding-bottom: 3.125rem;

  .portfolio-title {
    text-transform: uppercase;
    font-size: 10rem;
    letter-spacing: 0.25rem;
    font-weight: 700;
    color: white;
    font-family: "Roboto", sans-serif;
    mix-blend-mode: multiply;
    text-shadow: -0.063rem 0 rgb(201, 198, 198), 0 0.063rem rgb(201, 198, 198),
      0.063rem 0 rgb(201, 198, 198), 0 -0.063rem rgb(201, 198, 198);
  }

  h1 {
    background-color: #f8f9fa;
    display: grid;
    justify-items: start;
    font-size: 4.75rem;
    font-size: 3.75rem;
    margin-bottom: 0rem;
    text-transform: uppercase;
    font-weight: 700;
    padding-bottom: 3.125rem;
    padding-left: 1.25rem;
    margin-left: 20px;
  }
`;

export default Projects;
