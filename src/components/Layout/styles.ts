import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`
export const Content = styled.div`
  width: 100%;
  margin-top: 4.5rem;
  padding: 0 1rem;
  transition: 0.3s margin ease-in-out;

  @media (min-width: 1025px) {
    max-width: calc(100% - 17.5rem);
    margin-left: 17.5rem;
    border-left: 1px solid var(--color-divider);
  }
`
