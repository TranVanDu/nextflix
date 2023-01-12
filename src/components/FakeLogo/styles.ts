import styled from 'styled-components'

export const Container = styled.h1`
  cursor: default;
  font-weight: 600;
  line-height: 2.5rem;
  font-size: calc(1.5rem + 1.5vw);
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
  span {
    color: var(--color-secondary-main);
  }
`
