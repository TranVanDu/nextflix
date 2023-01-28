import styled from 'styled-components'

export const Overlay = styled.div`
  background-color: var(--color-overlay);
  backdrop-filter: blur(8px);
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1050;
  opacity: 0;
  pointer-events: none;
  transition: 0.3s opacity ease-in-out;

  &.isOpen {
    opacity: 1;
    pointer-events: all;
  }
  @media (min-width: 1025px) {
    opacity: 0;
    display: none;
  }
`
export const Container = styled.nav`
  background-color: var(--color-primary-main);
  border-right: 1px solid var(--color-divider);
  width: 17rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1100;
  transform: translateX(-100%);
  transition: 0.3s transform ease-in-out;

  @media (min-width: 1025px) {
    border-right: none;
    transition-duration: 0.15s;
  }
  &.isOpen {
    transform: translateX(0);
  }
`
export const Header = styled.div`
  min-height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2.3rem 0.5rem 1.8rem;
  border-bottom: 1px solid var(--color-divider);
  @media (min-width: 1025px) {
    justify-content: flex-start;
  }
`
export const Logo = styled.h1`
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
export const CloseBtn = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 0.35rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  background-color: var(--color-neutral-800);

  @media (min-width: 1025px) {
    display: none;
  }
`
export const NavItems = styled.ul`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-behavior: smooth;

  /* Firefox, IE and Edge */
  scrollbar-color: var(--color-primary-light) var(--color-primary-main);

  /* Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background: var(--color-primary-main);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    border-right: 0.2rem solid var(--color-primary-main);
    background-color: transparent;
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: var(--color-primary-light);
    }
  }
`
export const ItemLink = styled.li`
  width: 100%;
  min-height: 3.5rem;
  padding: 0 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    width: 100%;
    height: 70%;
    font-size: 1.25rem;
    text-decoration: none;
    text-transform: capitalize;
    align-items: center;
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    padding-left: 1rem;
    border-radius: 0.35rem;
    color: var(--color-white);
    &:hover {
      background-color: var(--color-neutral-800);
    }
  }
  &.selected {
    a {
      background-color: var(--color-secondary-main);
      &:hover {
        background-color: var(--color-secondary-main);
      }
    }
  }
`
export const Footer = styled.div`
  width: 100%;
  min-height: 4.5rem;
  padding: 0.5rem 2.3rem 0.5rem 1.8rem;
  border-top: 1px solid var(--color-divider);

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const SocialListItem = styled.li`
  list-style: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.35rem;
  background-color: var(--color-primary-dark);
  cursor: pointer;
  &:hover {
    background-color: var(--color-neutral-800);
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
    text-decoration: none;
    border-radius: 0.35rem;
    &:focus-visible {
      outline: 3px solid var(--color-outline);
    }
  }
`
