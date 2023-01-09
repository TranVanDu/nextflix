import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: dark;
    --color-white: #fff;
    --color-black: #151419;
    --color-primary-main: #171821;
    --color-primary-light: #3d3e48;
    --color-primary-dark: #000000;
    --color-secondary-main:#ea0b2f;
    --color-secondary-light: #ff7664;
    --color-secondary-dark: #aa0011;
    --color-neutral-100: #f0eef5;
    --color-neutral-200: #e4e3ea;
    --color-neutral-300: #d3d1d8;
    --color-neutral-400: #aeadb3;
    --color-neutral-500: #8d8c93;
    --color-neutral-600: #66656b;
    --color-neutral-700: #535257;
    --color-neutral-800: #3d3e48;
    --color-neutral-900: #373842;
    --color-overlay: rgba(23,24,33,0.8);
    --color-divider: rgba(255,255,255,0.12);
    --color-outline: rgba(66,153,225,0.6)
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    &::selection{ background-color: var(--color-secondary-main);}
  }
  *, button, input {
    border: 0;
    outline: 0;
    font-family: "Roboto",sans-serif;
    &:focus-visible {
      outline: 3px solid var(--color-outline);
    }
  }
  body {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    color: var(--color-white);
    background-color: var(--color-primary-main);
    scroll-behavior: smooth;
  }
  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    margin: 0;
    font-weight: 500;
    line-height: 1.2;
  }
  h1, .h1 {
    font-size: calc(1.375rem + 1.5vw);
    @media (min-width: 1200px){ font-size: 2.5rem;}
  }
  h2, .h2 {
    font-size: calc(1.325rem + 0.9vw);
    @media (min-width: 1200px){ font-size: 2rem;}
  }
  h3, .h3 {
    font-size: calc(1.3rem + 0.6vw);
    @media (min-width: 1200px){ font-size: 1.75rem;}
  }
  h4, .h4 {
    font-size: calc(1.275rem + 0.3vw);
    @media (min-width: 1200px){ font-size: 1.5rem;}
  }
  h5, .h5 {
    font-size: 1.25rem;
  }
  h6, .h6 {
    font-size: 1rem;
  }
  p {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
`
