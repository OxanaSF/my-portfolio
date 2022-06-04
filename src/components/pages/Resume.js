
import styled from "styled-components";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <ResumeStyled>
      <embed
        src={`${process.env.PUBLIC_URL}/images/OxanaH_CV.pdf`}
        type="application/pdf"
        width="100%"
        height="900px"
      />
    </ResumeStyled>
  );
};

const ResumeStyled = styled(motion.section)``;

export default Resume;
