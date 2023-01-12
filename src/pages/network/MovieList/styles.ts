import styled from 'styled-components'

export const Container = styled.div`
  a {
    border-radius: 0.35rem;
    color: var(--color-white);
    text-decoration: none;
  }

  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;
  }
  @media (min-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
  }
`
export const ImgContainer = styled.div`
  img {
    border-radius: 0.35rem 0.35rem 0 0;
    object-fit: cover;
  }

  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
`

export const Card = styled.div`
  background-color: var(--color-neutral-900);
  border-radius: 0.35rem;
  height: 100%;
  width: 100%;

  p {
    margin-top: 0.5rem;
    padding: 0 0.2rem;
    height: 3rem;
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  @media (min-width: 600px) {
    p {
      font-size: 1.25rem;
      height: 3.75rem;
    }
  }
`
