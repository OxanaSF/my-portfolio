import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectsStyled = styled(motion.section)`
  background-color: #f8f9fa;
  text-transform: uppercase;
  text-align: center;
  padding-top: 6.25rem;
  padding-bottom: 3.125rem;

  .projects-title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 60%;
    margin: 0 auto;
    margin-bottom: 4rem;
    
   
  }

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
  }



  h4 {
    text-align: right;
    margin-right: 2rem;
    display: flex;
    gap: 0.2rem;
    justify-content: right;
    align-items: center;
    /* margin-bottom: 2rem; */
  }

  .scroll-area {
    /* background: red; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row-reverse;
  }

  .arrow-left {
    height: 1.2rem;
  }

  .project-area {
    display: flex;
  }

  @media (max-width: 900px) {

    h4 {
      margin-bottom: 0;
    }
      
    .scroll-area {
    /* background: red; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

    .portfolio-title {
      font-size: 3.2rem;
      display: flex;
    }
  }
`;

export const SideBarLeftStyled = styled.div`
  .side-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2rem;
    gap: 1rem;
  }

  .side-icon-container {
    width: 2.7rem;
    height: 2.7rem;
    border: 0.2rem solid black;
    padding: 0.3rem;
    border-radius: 20%;
    cursor: pointer;
    display: flex;
    position: relative;
    display: inline-block;

    img {
      width: 100%;
    }
  }

  .side-icon-container-projects {
    border: 0.2rem solid #007bff;
    border: 0.2rem solid #2b5876;
    box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75); 
  }
`;

export const CirculeStyled = styled.div`
  #progress {
    transform: rotate(-90deg);
    /* display: flex;
    justify-content: right; */
  }

  circle {
    stroke-dashoffset: 0;
    stroke-width: 10%;
    fill: none;
  }

  .bg {
    stroke: black;
    opacity: 0.3;
  }

  #progress .indicator {
    stroke: #007bff;
    stroke: #2b5876;
  }
`;

export const ProjectColectionStyled = styled.ul`
  display: flex;
  list-style: none;
  height: 25rem;
  overflow-x: scroll;
  margin: 0 auto;

  gap: 2rem;
  margin-left: 2rem;

  ::-webkit-scrollbar {
    height: 5px;
    width: 5px;
    background: #fff3;
    -webkit-border-radius: 1ex;
  }

  ::-webkit-scrollbar-thumb {
    background: #007bff;
    background: #2b5876;
    -webkit-border-radius: 1ex;
  }

  ::-webkit-scrollbar-corner {
    background: #fff3;
  }

  li {
    width: 45rem;
    flex: 0 0 200px;
    /* background: var(--accent); */
    margin: 0 20px 0 0;
    border: 0.2rem solid rgb(225, 225, 225);
    border-radius: 1rem;
  }
  li:last-of-type {
    margin: 0;
  }

  .horizontal-item-inside {
    width: 43rem;
    border-radius: 0.8rem;
  }

  @media (max-width: 900px) {
    height: 20rem;
    margin: 0 5%;
    
  }
`;
