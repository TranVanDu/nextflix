import styled from 'styled-components'

export const Overlay = styled.div`
  background-color: #3d3e481a;
  backdrop-filter: blur(5px);
  position: fixed;
  z-index: 1150;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;

  opacity: 0;
  transition: 0.5s opacity ease-in-out;

  &.visibility {
    opacity: 1;
    pointer-events: all;
  }
`
export const Container = styled.div`
  position: fixed;
  z-index: 1151;
  top: 50%;
  left: 50%;
  width: 95%;
  max-width: 800px;
  aspect-ratio: 3/2;
  height: auto;
  max-height: 90%;
  border-radius: 0.35rem;
  background-color: var(--color-primary-main);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  opacity: 0;
  transform: translate(-50%, -50%) scale(0.3);
  transition: 0.5s all ease;

  &.visibility {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  iframe {
    width: 100%;
    height: 100%;
    flex-grow: 1;
    border-radius: 0.35rem;
  }
`
export const CloseButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border-radius: 0.35rem;
  aspect-ratio: 1/1;
  padding: 0.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: end;
  svg {
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: rotate(90deg);
    }
  }
`
