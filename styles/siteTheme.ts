import { createGlobalStyle } from "styled-components";
import { roboto } from "../styles/fonts";

export const SiteTheme = {
  colors: {
    primary: '#0070f3',
    secondary: '#6c757d',
    background: '#f8f9fa',
    text: '#212529',
  },

  font: {
    Roboto: `${roboto.style.fontFamily}`,
  },
};

export const GlobalStyle = createGlobalStyle`
  :root {
    --bs-body-font-family: ${roboto.style.fontFamily};
  }
  body {
    font-family: ${roboto.style.fontFamily};
  }

  .img-responsive {
    max-width: 100%;
    height: auto;
    display: block;
    width: 100%;
  }
`;
