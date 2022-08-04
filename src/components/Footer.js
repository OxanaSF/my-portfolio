import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="social-media-icons">
        <a href="https://www.linkedin.com/in/oxana-howard/" target="_blank">
          <img
            className="social-media-icon linkedin"
            src={`${process.env.PUBLIC_URL}/images/linkedin.png`}
            alt="linkedin icon"
          />
        </a>
        <a href="https://github.com/OxanaSF" target="_blank">
          <img
            className="social-media-icon github"
            src={`${process.env.PUBLIC_URL}/images/github-sign.png`}
            alt="github icon"
          />
        </a>
        {/* <a href="https://www.instagram.com/oxanasf/" target="_blank">
          <img
            className="social-media-icon instagram"
            src={`${process.env.PUBLIC_URL}/images/instagram.png`}
            alt="instagram icon"
          />
        </a> */}
      </div>

      <div className="copyright">
        &copy; Oxana Howard {new Date().getFullYear()}
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  color: black;
  background-size: cover;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 800;
  letter-spacing: 1px;
  border-top: 0.063rem solid rgb(226, 224, 224);
  padding: 0 5rem;

  .social-media-icons {
    display: flex;
    gap: 1.5rem;

    .copyright {
      /* align-self: center; */
    }

    .social-media-icon {
      width: 3rem;
      height: 3rem;
    }
  }
`;

export default Footer;
