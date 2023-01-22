import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  min-height: calc(100vh - 4.5rem);
  margin: 0 auto;
  max-width: 1000px;

  @media (min-width: 1025px) {
    position: relative;
  }
`
export const Content = styled.div`
  position: relative;
  z-index: 100;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;

  @media (min-width: 600px) {
    display: grid;
    grid-template-areas:
      'title title'
      'creators poster'
      'infos poster'
      'genres poster'
      'networks poster'
      'overview overview'
      'button button';
    grid-template-columns: auto 38%;
    align-items: flex-end;
  }
  @media (min-width: 700px) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
    padding-right: 20.75rem;
  }
  @media (min-width: 1025px) {
    padding-left: 1rem;
  }
`
