import styled from 'styled-components';

export const FooterStyled = styled.footer`
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

    .social-media-icon {
      width: 3rem;
      height: 3rem;
    }
  }

  @media (max-width: 900px) {
    padding: 0 2rem;
    .social-media-icons {
   
    gap: 1rem;


    .social-media-icon {
      width: 2.7rem;
      height: 2.7rem;
    }
  }

  }

`;
