import styled from "styled-components";
import { motion } from 'framer-motion';

export const HorizontalItemStyled = styled(motion.div)`
  height: 35rem;
  width: 45rem;
  padding: 80px 40px;
  cursor: pointer;




  .horizontal-item-inside {
    width: 100%;
    height: 100%;
    border-radius: 1.2rem;
    border: 0.5px solid black;
  }
`;