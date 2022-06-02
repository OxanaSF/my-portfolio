import React from 'react'
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled>
        <div>
          Copyright &copy; {new Date().getFullYear()}
          </div>
    </FooterStyled>
  )
}


const FooterStyled = styled.footer`
 background: black;
 background: #8effa0;
 color: black;
  background-size: cover;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  letter-spacing: 1px;
`

export default Footer