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