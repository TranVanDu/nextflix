import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;

  @media (min-width: 1025px) {
    max-width: 900px;
  }
`
