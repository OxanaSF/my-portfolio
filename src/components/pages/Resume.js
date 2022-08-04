
import styled from "styled-components";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <ResumeStyled id='resume'>
      <div className="resume-container">
      <embed
        src={`${process.env.PUBLIC_URL}/images/Web_Developer_Oxana_Howard.pdf`}
        type="application/pdf"
        width="100%"
        height="900px"
      />
      </div>
    </ResumeStyled>
  );
};

const ResumeStyled = styled(motion.section)`

`;

export default Resume;
