import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 55%;
  aspect-ratio: 2/3;

  img {
    border-radius: 0.35rem;
    z-index: 100;
  }

  @media (min-width: 600px) {
    grid-area: poster;
    width: 100%;
  }
  @media (min-width: 700px) {
    position: fixed;
    width: 18.75rem;
    right: 1rem;
  }
  @media (min-width: 1025px) {
    position: absolute;
    top: 2rem;
  }
`
