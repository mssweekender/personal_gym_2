import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
      --gradient: linear-gradient(30deg, rgba(237, 19, 19), rgba(229,110,0));
      --gradient_opacity: linear-gradient(50deg, rgba(237, 19, 19, 0.8), rgba(229,110,0,0.8));
      --enji: #B3424A;
      /* fonts */
      --poppins: 'Poppins', sans-serif;
  }

  * {
      font-family: 'Noto Sans JP', sans-serif;
  }



`;

export default GlobalStyle;
