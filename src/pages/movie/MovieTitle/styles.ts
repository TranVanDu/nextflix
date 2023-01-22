import styled from 'styled-components'

export const Container = styled.div`
  margin: 0.5rem 0;
  h2 {
    font-style: italic;
    font-size: 1.25rem;
    color: var(--color-neutral-400);
  }
  @media (min-width: 600px) {
    grid-area: title;
  }
`
