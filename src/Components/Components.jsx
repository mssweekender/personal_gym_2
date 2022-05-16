import styled from "styled-components";

import Circles from "../Images/title-circles.svg";

export const Size = styled.div`
  width: 314px;
  height: 100%;
  margin: 0 auto;
`;

export const Size2 = styled.div`
  width: 350px;

  margin: 0 auto;
`;

export const TitleFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SectionTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  &::after {
    content: "";
    display: inline-block;
    background-image: url(${Circles});
    width: 86px;
    height: 86px;
    margin-top: -20px;
    margin-left: -20px;
    background-size: cover;
  }

  &::before {
    content: "";
    display: inline-block;
    background-image: url(${Circles});
    background-size: cover;
    width: 52px;
    height: 52px;
    margin-bottom: -50px;
  }
`;

export const SubTitle = styled.p`
  font-size: 13px;
  font-weight: 700;
  color: #f03434;
`;

export const MainTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: black;
`;
