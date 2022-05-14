import React from "react";
import styled from "styled-components";

//import Images

import BG from "../../Images/hero-bg.svg";

const Hero = () => {
  return (
    <HeroSection>
      <HeroTitle>
        <p>ボディメイク</p>
        <p>ボディケア</p>
        <p>健康管理</p>
      </HeroTitle>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.div`
  width: 100%;
  height: 844px;
  background-color: aliceblue;
  background-image: url(${BG});
  background-position: top;
`;

const HeroTitle = styled.div`
  width: max-content;
  display: flex;
  flex-direction: row;
  gap: 9px;
  align-items: center;
  margin: 0 auto;

  p {
    min-width: 100px;
    color: #fff;
    font-size: 9px;
    padding: 11px 23px;
    text-align: center;
    margin-top: 54px;
    background-image: var(--gradient);
  }
`;
