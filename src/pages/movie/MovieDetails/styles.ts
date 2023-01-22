import styled from 'styled-components'

export const Container = styled.div`
  font-size: 1.25rem;
  display: flex;
  gap: 1rem;
  p {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 0.25rem;
  }

  @media (min-width: 600px) {
    grid-area: infos;
  }
`
