import styled from 'styled-components'

export const Container = styled.button`
  cursor: pointer;
  width: 100%;
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

  @media (min-width: 600px) {
    grid-area: button;
    max-width: 22.5rem;
  }
`
