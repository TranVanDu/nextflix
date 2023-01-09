import styled from 'styled-components'

export const Container = styled.div`
  min-width: 7.2rem;
  height: 2.5rem;
  border-radius: 0.35rem;
  position: relative;
  cursor: default;
`
export const Input = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0.5rem;
  border-radius: 0.35rem;
  font-size: 1rem;
  background-color: var(--color-neutral-800);
  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const Menu = styled.ul`
  position: absolute;
  left: 0;
  transform: translateY(0.5rem);
  width: 100%;
  border-radius: 0.35rem;
  overflow: auto;
  background-color: var(--color-neutral-800);
  li {
    width: 100%;
    padding: 0 0.5rem;
  }
  li:focus {
    background-color: var(--color-neutral-500);
  }
  li:focus-visible {
    outline: none;
  }
`
