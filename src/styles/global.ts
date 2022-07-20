import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #3E517A;
    --middle-blue: #70CAD1;
    --text: #f2f0f5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93,75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea {
    font-family: 'Cairo', sans-serif;
    font-weight: 400;
  }

  h1 {
    font-weight: 700;
  }

  h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    font-weight: 700;
    cursor: pointer;
  }
`