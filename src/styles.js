import styled from "styled-components"

export const LayoutStyled = styled.section`
  min-height: 90vh;
  display: grid;
  grid-template-columns: 40% 60%;
`

export const DescriptionStyled = styled.div`
  flex: 1;
  /* padding-right: 5rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImageStyled = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    height: 90vh;
    /* object-fit: cover; */
  }
`