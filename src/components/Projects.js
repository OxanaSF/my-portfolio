import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import VerticalCarousel from './VerticalCarousel';
import HorizontalCarousel from './HorizontalCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faLaptop } from '@fortawesome/free-solid-svg-icons';

const Projects = (props) => {
  // const [isMobale, setIsMobale] = useState(false);

  // const switchMobalDesctopHandler = () => {
  //   setIsMobale(!isMobale);
  // };

  // const desktopDisplay = (
  //   <ProjectsButtonStyled
  //     type="button"
  //     onClick={switchMobalDesctopHandler}
  //     className="btn-desktop-mobale"
  //   >
  //     <FontAwesomeIcon className="portfolio-icon icon-mobale" icon={faMobile} />

  //     <span>View mobile design</span>
  //   </ProjectsButtonStyled>
  // );

  // const mobaleDisplay = (
  //   <ProjectsButtonStyled
  //     type="button"
  //     onClick={switchMobalDesctopHandler}
  //     className="btn-desktop-mobale"
  //   >
  //     <div className="portfolio-icons">
  //       <FontAwesomeIcon
  //         className="portfolio-icon icon-desktop"
  //         icon={faLaptop}
  //       />
  //       <span className="portfolio-text">View the desktop version</span>
  //     </div>
  //   </ProjectsButtonStyled>
  // );

  return (
    <ProjectsStyled id="projects">
      <div className="portfolio-title">Projects</div>

      {/* <h1 id="scroll-gallery">Projects</h1> */}

      {/* {!isMobale && desktopDisplay} */}
      {/* {!isMobale && <HorizontalCarousel />} */}

      {/* {isMobale && mobaleDisplay} */}
      {/* {isMobale && <VerticalCarousel />} */}

      <HorizontalCarousel />

      
    </ProjectsStyled>
  );
};

const ProjectsButtonStyled = styled.button`
background: red;
  cursor: pointer;
  padding: 1rem;
  background: white;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  margin-bottom: 5rem;
  text-transform: uppercase;

  .portfolio-icon {
    margin-right: 0.3rem;
  }
`;

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
    font-family: 'Roboto', sans-serif;
    mix-blend-mode: multiply;
    text-shadow: -0.063rem 0 rgb(201, 198, 198), 0 0.063rem rgb(201, 198, 198),
      0.063rem 0 rgb(201, 198, 198), 0 -0.063rem rgb(201, 198, 198);
    
    margin-bottom: 5rem;
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
