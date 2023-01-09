import styled from 'styled-components'

export const Container = styled.h1`
  cursor: default;
  font-weight: 600;
  span {
    color: var(--color-secondary-main);
  }
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`
