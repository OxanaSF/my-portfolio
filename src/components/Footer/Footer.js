import React from 'react';
import { FooterStyled } from './FooterStyles';

const Footer = () => {
  return (
    <FooterStyled>
      <div className="social-media-icons">
        <a href="https://www.linkedin.com/in/oxana-howard/" target="_blank" rel="noreferrer">
          <img
            className="social-media-icon linkedin"
            src={`${process.env.PUBLIC_URL}/images/linkedin.png`}
            alt="linkedin icon"
          />
        </a>
        <a href="https://github.com/OxanaSF" target="_blank" rel="noreferrer">
          <img
            className="social-media-icon github"
            src={`${process.env.PUBLIC_URL}/images/github-sign.png`}
            alt="github icon"
          />
        </a>
      </div>

      <div className="copyright">
        &copy; Oxana Howard {new Date().getFullYear()}
      </div>
    </FooterStyled>
  );
};

export default Footer;
