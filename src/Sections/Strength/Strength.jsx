import React, { useState } from "react";
import styled from "styled-components";

import { motion, AnimateSharedLayout } from "framer-motion";

import { Data } from "../../Components/CardData";

import { IoIosArrowForward } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

import {
  SectionTitle,
  SubTitle,
  Size2,
  MainTitle,
  TitleFlex,
  Button,
} from "../../Components/Components";

const Strength = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StrengthContainer
      transition={{ duration: 1.2, ease: [0.04, 0.62, 0.23, 0.98] }}
    >
      <Size2>
        <SectionTitle>
          <TitleFlex>
            <SubTitle color="#f03434">選ばれる３つの理由</SubTitle>
            <MainTitle>なんでも頼れる”万能性”</MainTitle>
          </TitleFlex>
        </SectionTitle>
        <FeatureContainer
          transition={{ duration: 1.2, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          <AnimateSharedLayout>
            <CardSection
              layout
              transition={{ duration: 1.2, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              {Data.map((Data, index) => (
                <CardElement
                  key={index}
                  layout
                  transition={{
                    duration: 0.8,
                    ease: [0.04, 0.62, 0.23, 0.98],
                    // type: "spring",
                  }}
                  exit={{ duration: 2, ease: [0.04, 0.62, 0.23, 0.98] }}
                  onClick={() => setIsOpen(!isOpen)}
                  style={{
                    borderRadius: "20px",
                  }}
                  background={Data.background}
                >
                  <CardContents>
                    <motion.div className="initial_content" layout="position">
                      <motion.div layout="position" className="num">
                        <motion.p className="number" layout="position">
                          {Data.num}
                        </motion.p>
                      </motion.div>
                      <motion.div className="txt">
                        <motion.p layout="position" className="text">
                          {Data.main}
                        </motion.p>
                        <motion.p layout="position" className="text">
                          {Data.main_2}
                        </motion.p>
                      </motion.div>
                    </motion.div>
                    {isOpen && (
                      <ContentText
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                      >
                        <motion.p className="text">{Data.text}</motion.p>
                        <motion.p className="sub_text">
                          {Data.sub_text}
                        </motion.p>
                        <motion.p className="sub_text">
                          {Data.sub_text_2}
                        </motion.p>
                      </ContentText>
                    )}
                    {isOpen ? (
                      <OpenButton>
                        閉じる
                        <i className="arrow">
                          <IoCloseOutline />
                        </i>
                      </OpenButton>
                    ) : (
                      <OpenButton>
                        もっと見る
                        <i className="arrow">
                          <IoIosArrowForward />
                        </i>
                      </OpenButton>
                    )}
                  </CardContents>
                </CardElement>
              ))}
            </CardSection>
          </AnimateSharedLayout>
        </FeatureContainer>
      </Size2>
      <Button />
    </StrengthContainer>
  );
};

export default Strength;

const StrengthContainer = styled(motion.div)`
  padding-top: 120px;
  padding-bottom: 60px;
  width: 100%;
  height: 100%;
`;

const FeatureContainer = styled(motion.div)`
  margin: 50px auto;
  height: 100%;
`;

const CardSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const CardElement = styled(motion.div)`
  width: 341px;
  padding: 30px 20px;
  background-image: url(${(props) => props.background});
  background-position: center;
  /* border-radius: 20px; */

  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* transition: all 1s ease-in-out; */

  &:hover {
    button {
      transform: scale(1.02); //scale(1.1)
      color: rgba(225, 225, 225);
      .arrow {
        transform: rotate(90deg);
      }
    }
  }
`;

const CardContents = styled(motion.div)`
  .initial_content {
    width: max-content;
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    .num {
      text-align: center;
      display: flex;
      flex-direction: row;
      align-items: baseline;
      gap: 10px;
      .number {
        width: 40px;
        line-height: 30px;
        font-family: var(--poppins);
        font-style: italic;
        font-size: 30px;
        font-weight: 800;
        color: white;
        margin-bottom: -23px;
        position: relative;
        top: 7px;
        z-index: 999;
      }
      &::before,
      ::after {
        content: "";
        width: 80.5px;
        height: 4px;
        background-color: rgba(255, 255, 255);
        display: inline-block;
      }
    }
    .txt {
      /* width: 80%; */
      text-align: center;
      padding: 23px 15px 20px 15px;
      background-color: rgba(0, 0, 0, 0.2);
      border-bottom: 4px solid rgba(255, 255, 255);
      border-left: 4px solid rgba(255, 255, 255);
      border-right: 4px solid rgba(255, 255, 255);

      backdrop-filter: blur(2px);
      .text {
        min-width: 183px;
        font-family: var();
        font-size: 12px;
        font-weight: 700;
      }
    }
  }
`;

const OpenButton = styled.button`
  color: #b5b5b5;
  margin-top: 40px;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease;
  font-size: 13px;
  .arrow {
    font-size: 13px;
    margin-top: 5px;
    transition: 0.3s ease;
  }
`;

const ContentText = styled(motion.div)`
  width: 90%;
  margin: 40px auto 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  color: white;
  z-index: 999;
  .text {
    font-size: 18px;
    font-weight: 500;
    word-break: keep-all;
  }
  .sub_text {
    font-size: 12px;
    font-weight: 300;
  }
`;
