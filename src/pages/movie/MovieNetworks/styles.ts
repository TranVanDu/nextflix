import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;

  img {
    object-fit: contain;
  }
  @media (min-width: 600px) {
    grid-area: networks;
  }
`
