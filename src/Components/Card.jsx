import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//import Images
import { IoIosArrowForward } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CardElement
      layout
      transition={{
        duration: 1,
        type: "spring",
      }}
      onClick={() => setIsOpen(!isOpen)}
      style={{
        borderRadius: "20px",
        backgroundImage: `url(${require(`../Images/feature-1.png`)})`,
      }}
    >
      <CardContents>
        <motion.div className="initial_content" layout="position">
          <motion.div layout="position" className="num">
            <motion.p className="number" layout="position">
              1
            </motion.p>
          </motion.div>
          <motion.div className="txt">
            <motion.p layout="position" className="text">
              パーソナルトレーニングのプロが <br />
              あなたの専属トレーナーに
            </motion.p>
          </motion.div>
        </motion.div>
        {isOpen && (
          <ContentText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.p className="text">
              あなたの負担を軽減できるよう
              <br />
              緻密に計算された食事管理
            </motion.p>
            <motion.p className="sub_text">
              一人でトレーニングをしてると、
              どうしても体のケアを怠ってしまうことがありますよね。
              <br />
              <br />
              僕のパーソナルトレーニングでは、
              体のケアまでサポートすることができるので、
              長期間の目標にもコミットできるようになります。
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
  );
};

export default Card;

const CardElement = styled(motion.div)`
  width: 341px;
  padding: 30px 20px;

  /* border-radius: 20px; */

  overflow: hidden;
  background-color: aliceblue;
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
      .number {
        font-family: var(--poppins);
        font-style: italic;
        font-size: 30px;
        font-weight: 800;
        color: white;
        margin-bottom: -23px;
        position: relative;
        z-index: 999;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;

        &::before,
        ::after {
          content: "";
          width: 93px;
          height: 4px;
          background-color: rgba(255, 255, 255);
          display: inline-block;
        }
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
  }
  .sub_text {
    font-size: 12px;
    font-weight: 300;
  }
`;
