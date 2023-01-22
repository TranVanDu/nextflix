import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  li {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 0.5rem;
  }
  .text {
    display: flex;
    flex-direction: column-reverse;
  }
  .imgContainer {
    height: 4.063rem;

    img {
      object-fit: cover;
      border-radius: 100%;
    }
  }

  @media (min-width: 600px) {
    grid-area: creators;
    flex-direction: column;
    align-items: flex-start;
  }
  @media (min-width: 700px) {
    flex-direction: row;
  }
`
