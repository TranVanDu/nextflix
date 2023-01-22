import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 40%;
  left: 0;
  top: 4.5rem;
  z-index: 50;

  img {
    object-fit: cover;
  }

  @media (min-width: 500px) {
    height: 50%;
  }
  @media (min-width: 800px) and (max-height: 800px) {
    height: 70%;
  }
  @media (min-width: 1025px) {
    position: absolute;
    top: 1rem;
    left: 0;

    img {
      border-radius: 0.35rem 0.35rem 0 0;
    }
  }
`
export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 51;
  background-color: var(--color-overlay);

  @media (min-width: 1025px) {
    position: absolute;
  }
`
export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 52;
  background: linear-gradient(
    to top,
    var(--color-primary-main) 10%,
    transparent 90%
  );

  @media (min-width: 1025px) {
    position: absolute;
  }
`
