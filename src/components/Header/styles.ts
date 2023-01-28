import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--color-primary-main);
  border-bottom: 1px solid var(--color-divider);
  width: 100%;
  height: 4.5rem;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  transition: 0.3s margin ease-in-out;
  z-index: 1000;

  @media (min-width: 1025px) {
    max-width: calc(100% - 17rem);
    margin-left: 17rem;
    border-left: 1px solid var(--color-divider);
  }
`
export const IconButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.35rem;
  cursor: pointer;
  color: var(--color-white);
  background-color: var(--color-neutral-800);
  &:focus-visible {
    outline: 3px solid var(--color-outline);
  }
  @media (min-width: 1025px) {
    visibility: hidden;
  }
`
