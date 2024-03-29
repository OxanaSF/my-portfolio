import { motion } from 'framer-motion';
import {
  sideBarIconHomeFromRight ,
  sideBarIconUserFromRight ,
  sideBarIconProjectsFromRight ,
  sideBarIconContactFromRight ,
} from '../animation';
import { useScroll } from '../useScroll';

import {
  AboutStyled,
  DescriptionAboutStyled,
  ImageAboutStyled,
} from './AboutStyles';

const About = () => {
  const [element, controls] = useScroll();

  return (
    <AboutStyled ref={element} id="about">
      <ImageAboutStyled>
        <div className="about-left-img">
          <motion.img
            src={`${process.env.PUBLIC_URL}/images/oxana_img.jpeg`}
            alt="myself"
          />
        </div>
      </ImageAboutStyled>

      <DescriptionAboutStyled>
        <div>
          <h2>About me</h2>
          <h6>Web App & Front-end Developer</h6>
          <motion.p className="par1" >
            Highly analytical, creative, and detail-oriented former attorney
            turned full stack web developer and software engineer. My technical
            skills include understanding of object-oriented design patterns and
            principles, software architecture, algorithms, knowledge of several
            programming languages and development tools.
          </motion.p>
        </div>
        <div className="about-button">
          <a
            className="btn-download"
            href={`${process.env.PUBLIC_URL}/images/Web_Developer_Oxana_Howard.pdf`}
            alt="photo of me"
            download="OxanaH_CV.pdf"
          >
            {' '}
            Download CV{' '}
          </a>
        </div>
      </DescriptionAboutStyled>

      <motion.div className="side-bar">
        <motion.div
          className="side-icon-container"
          animate={controls}
          variants={sideBarIconHomeFromRight }
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
          className="side-icon-container side-icon-container-about"
          animate={controls}
          variants={sideBarIconUserFromRight }
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
          className="side-icon-container"
          animate={controls}
          variants={sideBarIconProjectsFromRight }
        >
          <a href="#projects">
            <img
              className="side-icon option"
              src={`${process.env.PUBLIC_URL}/images/option.png`}
              alt="option icon"
            />
          </a>
        </motion.div>

        <motion.div
          className="side-icon-container"
          animate={controls}
          variants={sideBarIconContactFromRight }
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

      
    </AboutStyled>
  );
};

export default About;
