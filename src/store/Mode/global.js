import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*,
  *::after,
  *::before {
    box-sizing: border-box;
  }

body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    margin: 0;
    padding: 0;
}

div {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
}

`;
