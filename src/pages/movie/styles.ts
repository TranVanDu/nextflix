import styled from 'styled-components'

export const Container = styled.main`
  position: relative;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`
export const FlexContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  @media (min-width: 600px) {
    padding-right: 43%;
  }
  @media (min-width: 900px) {
    padding-right: 37%;
  }
  @media (min-width: 1025px) {
    padding-left: 316px;
    padding-right: 0;
    gap: 1.5rem;
    height: auto;
    min-height: 450px;
    justify-content: space-between;
  }
  @media (min-width: 1100px) {
    padding-left: 366px;
    min-height: 550px;
  }
`
export const Title = styled.div`
  h2 {
    font-style: italic;
    font-size: 1.25rem;
    color: var(--color-neutral-500);
  }
  @media (min-width: 800px) {
    width: 100%;
  }
`
export const PosterWrapper = styled.div`
  position: relative;
  width: 80%;
  aspect-ratio: 2/3;
  img {
    border-radius: 0.35rem;
    z-index: 100;
  }
  @media (min-width: 600px) {
    width: 40%;
    position: fixed;
    right: 1rem;
  }
  @media (min-width: 900px) {
    width: 35%;
  }
  @media (min-width: 1025px) {
    width: 300px;
    right: initial;
    transform: translateX(-316px);
  }
  @media (min-width: 1100px) {
    width: 350px;
    transform: translateX(-366px);
  }
`
export const Infos = styled.div`
  font-size: 1.25rem;
  display: flex;
  gap: 1rem;
  p {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 0.25rem;
    list-style: none;
  }
`
export const Genres = styled.ul`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  li {
    padding: 0.25rem;
    border-radius: 0.35rem;
    background-color: var(--color-neutral-800);
    list-style: none;
  }
`
export const Creator = styled.div`
  display: flex;
  flex-direction: column-reverse;
  h3 {
    font-weight: 400;
    font-size: 1rem;
  }
  p {
    line-height: 1.2;
    font-weight: 500;
    font-size: 1.25rem;
  }
`
export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  max-width: 22.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 0.35rem;
  color: var(--color-white);
  background-color: var(--color-secondary-main);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2%;
  font-size: 1.25rem;
`
