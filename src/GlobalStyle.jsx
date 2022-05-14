import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
      --gradient: linear-gradient(30deg, rgba(214, 15, 15), rgba(229,110,0));
  }

  * {
      font-family: 'Noto Sans JP', sans-serif;
  }



`;

export default GlobalStyle;
