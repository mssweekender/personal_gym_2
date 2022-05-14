import React from "react";

import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
// import Sections
import Hero from "./Sections/Hero/Hero";
import Intro from "./Sections/Intro/Intro";
import Desire from "./Sections/Desire/Desire";
import Strength from "./Sections/Strength/Strength";
import Customer from "./Sections/Customer/Customer";
import Contact from "./Sections/Contact/Contact";
// import images

function App() {
  return (
    <MainContainer>
      <GlobalStyle />
      <Hero />
      <Intro />
      <Desire />
      <Strength />
      <Customer />
      <Contact />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  width: 390px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;
