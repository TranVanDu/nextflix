import styled from 'styled-components'

export const Container = styled.ul`
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

  @media (min-width: 600px) {
    grid-area: genres;
  }
`
