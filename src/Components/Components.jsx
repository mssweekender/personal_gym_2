import styled from "styled-components";
import { motion } from "framer-motion";

import Circles from "../Images/title-circles.svg";

export const Size = styled.div`
  width: 314px;
  height: 100%;
  margin: 0 auto;
`;

export const Size2 = styled(motion.div)`
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
  color: ${(props) => props.color}; //#f03434
`;

export const MainTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.color};
`;

export const Button = () => {
  return (
    <ButtonSection href="https://lin.ee/HdWRmH2">
      LINEでのご相談はこちらから
    </ButtonSection>
  );
};

const ButtonSection = styled.a`
  display: block;
  width: max-content;
  margin: 0 auto;
  padding: 10px 30px;
  font-size: 16px;
  text-decoration: none;
  color: white;
  border: 3px solid white;
  background-image: linear-gradient(
    30deg,
    rgba(237, 19, 19),
    rgba(229, 110, 0)
  );
  box-shadow: 3px 4px 16px -6px rgba(0, 0, 0, 0.6);
  transition: all 0.4s ease-in-out;
  transition-duration: 0.3s;

  &:hover {
    box-shadow: 7px 8px 25px -6px rgba(0, 0, 0, 0.5);
  }
`;
