import { useRef } from 'react';
import {
  ProjectsStyled,
  SideBarLeftStyled,
  CirculeStyled,
  ProjectColectionStyled,
} from './ProjectStyles';
import { motion, useScroll as scroll } from 'framer-motion';

import {
  sideBarIconHomeFromLeft,
  sideBarIconUserFromLeft,
  sideBarIconProjectsFromLeft,
  sideBarIconContactFromLeft,
} from '../animation';

import { useScroll } from '../useScroll';

import { webDevProjects } from '../../utils/data';

const Projects = (props) => {
  const [element, controls] = useScroll();
  const ref = useRef(null);
  const { scrollXProgress } = scroll({ container: ref });

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
              <a href="#top">
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
                  src={`${process.env.PUBLIC_URL}/images/menu.png`}
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

        <div className="projects-title-container">
          <div className="portfolio-title">Projects</div>
          <CirculeStyled className="svg">
            <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="indicator"
                style={{ pathLength: scrollXProgress }}
              />
            </svg>
          </CirculeStyled>
        </div>
      </div>

      <h4>
        Scroll{' '}
        <span>
          {' '}
          <img
            className="arrow-left"
            src={`${process.env.PUBLIC_URL}/images/arrow-right24.png`}
            alt="arrow to the left"
          />
        </span>{' '}
        to expore
      </h4>

      <ProjectColectionStyled ref={ref}>
        {webDevProjects.map((project, index) => {
          return (
            <li key={index}>
              <iframe
                title={index}
                className="horizontal-item-inside"
                src={project.url}
              ></iframe>
            </li>
          );
        })}
      </ProjectColectionStyled>
    </ProjectsStyled>
  );
};

export default Projects;
