import styled, { keyframes } from 'styled-components'

export const LoadingWrapper = styled.div`
  width: 100%;
  padding-top: 30vh;
  display: flex;
  justify-content: center;
`
export const BounceAnimation = keyframes`
  0% {
    transform: translateY(0) ;
  }

  50% {
    transform: translateY(1rem);
  }

  100% {
    transform: translateY(0);
  }
`
interface DotProps {
  delay: string
}

export const Dot = styled.div<DotProps>`
  background-color: var(--color-secondary-main);
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  margin: 0 0.35rem;
  animation: ${BounceAnimation} 0.7s linear infinite;
  animation-delay: ${props => props.delay};
`
