import styled from "styled-components";
import { motion } from "framer-motion";

export const LayoutStyled = styled(motion.section)`
  min-height: 90vh;
  display: grid;
  grid-template-columns: 40% 60%;

  @media (max-width: 1300px) {
    /* display: block; */
  }
`;

export const DescriptionStyled = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 1300px) {
    align-items: center;
  }
`;

export const ImageStyled = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    height: 90vh;
  }
`;
