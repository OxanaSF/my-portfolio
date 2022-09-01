import styled from "styled-components";
import { LayoutStyled, DescriptionStyled, ImageStyled } from "../../styles/styles";




export const HeroStyled = styled(LayoutStyled)`
  @media (max-width: 900px) {
    display: block;

  }
`;

export const HeroDescriptionStyled = styled(DescriptionStyled)`
  transform: translateX(50%);

  h1 {
    text-transform: uppercase;
    font-size: 9rem;
    letter-spacing: 0.25rem;
    font-weight: 700;
    color: white;


    @media (max-width: 1200px) {
      font-size: 7rem;
      letter-spacing: 0.15rem;
    }

    @media (max-width: 900px) {
      font-size: 5rem;
      letter-spacing: 0.15rem;
    }

   
  }

  .last-name {
    mix-blend-mode: multiply;
    text-shadow: -0.063rem 0 black, 0 0.063rem black, 0.063rem 0 black,
      0 -0.063rem black;
  }

  .first-name {
    color: black;
    font-family: "Roboto", sans-serif;
  }

  .typed-text {
    margin-left: 0.938rem;
  }

  /* First and Last Names Animation on hover */
  .last-name::before,
  .first-name::before {
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  .last-name:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .last-name::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: hsl(10, 2%, 90%);
    text-shadow: -0.063rem 0 black, 0 0.063rem black, 0.063rem 0 black,
      0 -0.063rem black;
    z-index: -1;
    transition: transform 0.3s ease;
  }

  .last-name,
  .first-name {
    position: relative;
  }

  /* Last Name Animation on Hover */
  .first-name:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .first-name::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: hsl(10, 2%, 90%);
    text-shadow: -0.063rem 0 black, 0 0.063rem black, 0.063rem 0 black,
      0 -0.063rem black;
    z-index: -1;
    transition: transform 0.3s ease;
  }

  @media (max-width: 900px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;



export const HeroImageStyled = styled(ImageStyled)`
  opacity: 0.4;
  border-bottom-left-radius: 20px;

  @media (max-width: 900px) {
    border-bottom-left-radius: 0;
    margin: 0;
  }
`;
