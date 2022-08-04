import styled from "styled-components";
import { motion } from 'framer-motion';


export const ProjectsStyled = styled(motion.section)`
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

    
    width: 60%;
    margin: 0 auto;

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

  h4 {
    text-align: right;
    margin-right: 2rem;
    display: flex;
    gap: 0.2rem;
    justify-content: right;
    align-items: center;
  }

  .arrow-left {
    height: 1.2rem;
  }


  .project-area {
    display: flex;
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
      width: 3rem;
      height: 3rem;
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
      border: 0.2rem solid  #007bff;
    }
`;

