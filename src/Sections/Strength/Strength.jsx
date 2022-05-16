import React from "react";
import styled from "styled-components";

import Card from "../../Components/Card";

import {
  SectionTitle,
  SubTitle,
  Size2,
  MainTitle,
  TitleFlex,
} from "../../Components/Components";

const Strength = () => {
  return (
    <StrengthContainer>
      <Size2>
        <SectionTitle>
          <TitleFlex>
            <SubTitle>選ばれる３つの理由</SubTitle>
            <MainTitle>なんでも頼れる”万能性”</MainTitle>
          </TitleFlex>
        </SectionTitle>
        <FeatureContainer>
          <CardSection>
            <Card />
          </CardSection>
        </FeatureContainer>
      </Size2>
    </StrengthContainer>
  );
};

export default Strength;

const StrengthContainer = styled.div`
  padding-top: 120px;
  width: 100%;
  height: 1300px;
`;

const FeatureContainer = styled.div`
  margin: 50px auto;
`;

const CardSection = styled.div``;
