import React from "react";
import styled from "styled-components";

//import components

import {
  SectionTitle,
  SubTitle,
  Size2,
  MainTitle,
  TitleFlex,
} from "../../Components/Components";

import Customers from "../../Components/Customers";

//import images

import BG from "../../Images/customer-bg.svg";

const Customer = () => {
  return (
    <CustomerContainer>
      <Size2>
        <SectionTitle>
          <TitleFlex>
            <SubTitle color="#ff5959">お客様の声・実績</SubTitle>
            <MainTitle color="white">パーソナルサポート実績</MainTitle>
          </TitleFlex>
        </SectionTitle>
        <Customers />
      </Size2>
    </CustomerContainer>
  );
};

export default Customer;

const CustomerContainer = styled.div`
  width: 100%;

  background-image: url(${BG});
  background-size: cover;
  background-position: center;
  padding-top: 80px;
  padding-bottom: 80px;
`;
