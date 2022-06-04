import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion";
import {
  pageTransitionAnimation,
  lineBlogAnimation,
  slider,
  slider2,
  slider3,
  slider4,
} from "../animation";

const Blog = () => {
  return (
    <BlogBGStyled>

      <Frame1Styled
        variants={slider}
        initial="hidden"
        animate="show"
      ></Frame1Styled>


      <Frame2Styled
        variants={slider2}
        initial="hidden"
        animate="show"
      ></Frame2Styled>


      <Frame3Styled
        variants={slider3}
        initial="hidden"
        animate="show"
      ></Frame3Styled>


      <Frame4Styled
        variants={slider4}
        initial="hidden"
        animate="show"
      ></Frame4Styled>

      
      <motion.div
        className="blog"
        variants={pageTransitionAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <h1>This is my Blog</h1>
        <motion.div
          className="line"
          variants={lineBlogAnimation}
          initial="hidden"
          animate="show"
        ></motion.div>
      </motion.div>
    </BlogBGStyled>
  );
};

const BlogBGStyled = styled(motion.section)`
  min-height: 90vh;
  text-align: center;

  .blog {
    h1 {
      font-size: 4rem;
      padding: 4rem 0 3rem 0;
    }
    .line {
      height: 0.3rem;
      background: #8effa0;
      width: 60%;
      margin: auto;
      border-radius: 5px;
    }
  }
`;

const Frame1Styled = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #8ecfb9;
  z-index: 2;

  @media (max-width: 1300px) {
    top: 13%;
  }
  @media (max-width: 1000px) {
    top: 12%;
  }
  @media (max-width: 912px) {
    top: 10%;
  }
  @media (max-width: 820px) {
    top: 11.5%;
  }
  @media (max-width: 414px) {
    top: 15%;
  }
  @media (max-width: 390px) {
    top: 16%;
  }
  @media (max-width: 375px) {
    top: 20%;
  }
`;

const Frame2Styled = styled(Frame1Styled)`
  background: #1effa9;
`;
const Frame3Styled = styled(Frame1Styled)`
  background: #9bffb9;
`;
const Frame4Styled = styled(Frame1Styled)`
  background: #8effa0;
`;

export default Blog;
