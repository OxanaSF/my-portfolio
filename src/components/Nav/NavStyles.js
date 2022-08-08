import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavStyled = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 5rem;
  box-shadow: 0rem 0rem 0.5rem rgba(0, 0, 0, 0.1);


  ul {
    display: flex;
    font-size: 1.875rem;
    font-weight: 500;
  }


  li {
    padding-left: 3rem;
    position: relative;
    padding-bottom: 0.5rem;
  }

  a {
    color: #007bff;
    color: black;
  }


 
  @media (max-width: 1300px) {
    justify-content: center;
    padding-left: 0;
    ul {
      flex-direction: column;
    }

  }
`;

export const LinkUnderlineStyled = styled(motion.div)`
  height: 0.3rem;
  background: #007bff;
  width: 0%;
  position: absolute;
  bottom: 0;
  left: 3rem;
  border-radius: 2px;
`;
