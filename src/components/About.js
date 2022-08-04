
import styled from 'styled-components';
import { LayoutStyled, DescriptionStyled, ImageStyled } from '../styles';
import { motion } from 'framer-motion';
import { aboutMeAnimation, 
  aboutImgAnimation, 
  sideBarIconHome,
  sideBarIconUser,
  sideBarIconProjects,
  sideBarIconContact
 } from './animation';
import { useScroll } from './useScroll';

const About = () => {
  const [element, controls] = useScroll();

  return (
    <AboutStyled ref={element} id="about">
      <ImageAboutStyled animate={controls} variants={aboutImgAnimation}>
        <div className="about-left-img">
          <img
            src={`${process.env.PUBLIC_URL}/images/oxana_img.jpeg`}
            alt="myself"
          />
        </div>
      </ImageAboutStyled>

      <DescriptionAboutStyled animate={controls} variants={aboutMeAnimation}>
        <div>
          <h2>About me</h2>
          <h6>Web App & Front-end Developer</h6>
          <p className="par1">
            Highly analytical, creative, and detail-oriented former attorney
            turned full stack web developer and software engineer. My technical
            skills include understanding of object-oriented design patterns and
            principles, software architecture, algorithms, knowledge of several
            programming languages and development tools.
          </p>
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
        <motion.div className="side-icon-container" animate={controls} variants={sideBarIconHome}>
          <a href="#home">
            <img
              className="side-icon home-icon"
              src={`${process.env.PUBLIC_URL}/images/home2.png`}
              alt="home icon"
            />
          </a>
        </motion.div>


        <motion.div className="side-icon-container" animate={controls} variants={sideBarIconUser}>
          <a href="#about">
            <img
              className="side-icon user-icon"
              src={`${process.env.PUBLIC_URL}/images/user.png`}
              alt="user icon"
            />
          </a>
        </motion.div>

        <motion.div className="side-icon-container" animate={controls} variants={sideBarIconProjects}>
          <a href="#projects">
          <img
            className="side-icon option"
            src={`${process.env.PUBLIC_URL}/images/option.png`}
            alt="option icon"
          />
          </a>
        </motion.div>

        <motion.div className="side-icon-container" animate={controls} variants={sideBarIconContact}>
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

const AboutStyled = styled(LayoutStyled)`
  padding: 15rem 0;
  display: flex;

  .side-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    margin-right: 2rem;

    .side-icon-container {
      width: 3rem;
      height: 3rem;
      border: 0.2rem solid black;
      padding: 0.3rem;
      border-radius: 20%;
      cursor: pointer;

      position: relative;
      display: inline-block;

      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 1300px) {
    margin: 3rem 0;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 50% 50%;
    margin: 3rem 0;
  }

  @media (max-width: 600px) {
    display: block;
  }
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
  /* 
  .about-button {
    margin-bottom: 17rem;
    background: pink;
  } */

  .btn-download {
    text-decoration: none;
    padding: 1.7rem 4rem;
    color: #fff;
    background-color: black;
    border-radius: 2.5rem;
    font-size: 1.25rem;
    letter-spacing: 0.063rem;
    letter-spacing: 1.5px;
    margin-top: 5rem;
  }

  @media (max-width: 1100px) {
    justify-content: center;
    justify-content: flex-start;
    padding: 0 2rem 2rem 3rem;
    margin-top: 4rem;

    .about-button {
      margin-top: 4rem;
      align-self: flex-start;
    }

    @media (max-width: 600px) {
      h2,
      h6 {
        text-align: center;
      }

      .about-button {
        margin-top: 4rem;
        align-self: center;
      }
    }
  }
`;

const ImageAboutStyled = styled(motion.ImageStyled)`
  img {
    height: 70vh;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    @media (max-width: 1100px) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      width: 100%;
      height: 60vh;
      object-fit: cover;
    }
  }
`;

export default About;
