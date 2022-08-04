import HorizontalCarousel from '../HorizontalCarousel/HorizontalCarousel';
import { ProjectsStyled, SideBarLeftStyled } from './ProjectStyles';
import { motion } from 'framer-motion';

import {
  sideBarIconHomeFromLeft,
  sideBarIconUserFromLeft,
  sideBarIconProjectsFromLeft,
  sideBarIconContactFromLeft,
} from '../animation';

import { useScroll } from '../useScroll';

const Projects = (props) => {
  const [element, controls] = useScroll();

  return (
    <ProjectsStyled ref={element} id="projects">
      <div className="project-area">


        <SideBarLeftStyled>
          <motion.div className="side-bar">
            <motion.div
              className="side-icon-container"
              animate={controls}
              variants={sideBarIconHomeFromLeft}
            >
              <a href="#home">
                <img
                  className="side-icon home-icon"
                  src={`${process.env.PUBLIC_URL}/images/home2.png`}
                  alt="home icon"
                />
              </a>
            </motion.div>

            <motion.div
              className="side-icon-container"
              animate={controls}
              variants={sideBarIconUserFromLeft}
            >
              <a href="#about">
                <img
                  className="side-icon user-icon"
                  src={`${process.env.PUBLIC_URL}/images/user.png`}
                  alt="user icon"
                />
              </a>
            </motion.div>

            <motion.div
              className="side-icon-container side-icon-container-projects"
              animate={controls}
              variants={sideBarIconProjectsFromLeft}
            >
              <a href="#projects">
                <img
                  className="side-icon option"
                  src={`${process.env.PUBLIC_URL}/images/menu-blue.png`}
                  alt="option icon"
                />
              </a>
            </motion.div>

            <motion.div
              className="side-icon-container"
              animate={controls}
              variants={sideBarIconContactFromLeft}
            >
              <a href="#contact">
                <img
                  className="side-icon letter"
                  src={`${process.env.PUBLIC_URL}/images/letter.png`}
                  alt="letter icon"
                />
              </a>
            </motion.div>
          </motion.div>
        </SideBarLeftStyled>



        <div className="portfolio-title">Projects</div>
      </div>


      <h4>
        Drag{' '}
        <span>
          {' '}
          <img
            className="arrow-left"
            src={`${process.env.PUBLIC_URL}/images/arrow-left24.png`}
            alt="arrow to the left"
          />
        </span>{' '}
        to expore
      </h4>


      <HorizontalCarousel />
    </ProjectsStyled>
  );
};

export default Projects;
