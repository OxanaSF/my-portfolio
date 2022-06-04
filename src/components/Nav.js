import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { lineBlogAnimation } from "../components/animation";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <NavStyled>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <LinkUnderlineStyled
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "40%" : "0" }}
          />
        </li>

        <li>
          <Link to="/resume">Resume</Link>
          <LinkUnderlineStyled
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/resume" ? "46%" : "0" }}
          />
        </li>

        <li>
          <Link to="blog">Blog</Link>
          <LinkUnderlineStyled
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/blog" ? "33%" : "0" }}
          />
        </li>
      </ul>
    </NavStyled>
  );
};

const NavStyled = styled.nav`
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
    padding-left: 8rem;
    position: relative;
    padding-bottom: 0.5rem;
  }

  a {
    color: #007bff;
    color: black;
    /* color: #8effa0; */
  }

  @media (max-width: 1300px) {
    justify-content: center;
    padding-left: 0;
      ul {
        flex-direction: column;
      }

  }
`;

const LinkUnderlineStyled = styled(motion.div)`
  height: 0.3rem;
  background: #8effa0;
  background: #007bff;
  width: 0%;
  position: absolute;
  bottom: 0;
  left: 8rem;
  border-radius: 2px;

`;

export default Nav;
