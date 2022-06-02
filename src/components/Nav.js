import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <NavStyled>
      <h1>
        {" "}
        <Link to="/"></Link>{" "}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
         
        <li>
          <Link to="blog">Blog</Link>
        </li>
      </ul>
    </NavStyled>
  );
};

const NavStyled = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
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
  }

  a {
    color: #007bff;
    color: black;
  }


`;

export default Nav;
