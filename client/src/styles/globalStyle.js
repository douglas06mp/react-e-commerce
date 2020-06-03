import { createGlobalStyle } from 'styled-components';
import mediaQuery from './mediaQuery';

export const GlobleStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: 'Open Sans Condensed', sans-serif;

    ${mediaQuery.down('tabletL')} {
      font-size: 56.25%;
    }

    ${mediaQuery.down('mobileL')} {
      font-size: 50%;
    }
  }

  body {
    padding: 2rem 12rem 6rem;

    
    ${mediaQuery.down('laptopM')} {
      padding: 2rem 6rem 4rem;
    }

    ${mediaQuery.down('tabletL')} {
      padding: 2rem 4rem 3rem;
    }

    ${mediaQuery.down('mobileL')} {
      padding: 2rem 2rem 3rem;
    }
  }

  button {
    &:active,
    &:focus,
    &:link,
    &:visited {
      outline: none;
    }
  }

  a {
    color: #000;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 20px;
  }
`;
