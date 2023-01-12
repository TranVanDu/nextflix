import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  aspect-ratio: 6/4;
  position: relative;
  border-top-left-radius: 0.35rem;
  @media (min-width: 450px) {
    aspect-ratio: 5/3;
  }
  @media (min-width: 500px) {
    aspect-ratio: 5/2;
  }
`
export const ImgContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 75%;
  height: 100%;

  img {
    object-fit: cover;
    border-top-right-radius: 0.35rem;
  }
`
export const Logo = styled.div`
  position: absolute;
  width: 40%;
  height: 30%;
  left: 0;
  top: 40%;
  transform: translateY(-50%);

  img {
    object-fit: contain;
  }

  @media (min-width: 500px) {
    top: 50%;
  }
`
export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    var(--color-primary-main) 10%,
    transparent 90%
  );

  div {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      var(--color-primary-main) 30%,
      transparent 70%
    );
  }
`
export const Content = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  bottom: 1rem;

  p {
    display: flex;
    color: var(--color-neutral-400);
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.2;

    @media (min-width: 450px) {
      font-size: calc(1.275rem + 0.3vw);
    }
    @media (min-width: 1200px) {
      font-size: 1.5rem;
    }
  }
`
