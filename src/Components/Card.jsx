import React from "react";
import styled from "styled-components";

//import Images

import FBG1 from "../Images/feature-1.png";

const Card = () => {
  return (
    <CardElement>
      <BackGround src={FBG1} alt="" className="bg" />
      <CardContents>
        <div className="initial_content">
          <div className="num">
            <p className="number">1</p>
          </div>
          <div className="txt">
            <p className="text">
              パーソナルトレーニングのプロが <br />
              あなたの専属トレーナーに
            </p>
          </div>
        </div>
      </CardContents>
    </CardElement>
  );
};

export default Card;

const CardElement = styled.div`
  width: 341px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  background-color: aliceblue;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    background-color: black;
    z-index: 100;
  }
  .bg {
    width: 100%;
    height: 100%;
    transform: scale(1.1);
    transition: all 0.4s ease;
    position: relative;
  }
`;

const BackGround = styled.img``;

const CardContents = styled.div`
  .initial_content {
    width: max-content;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -75%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 998;
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
      }
    }
    .txt {
      /* width: 80%; */
      text-align: center;
      padding: 23px 15px 20px 15px;
      background-color: rgba(255, 255, 255, 0.2);
      border: 4px solid rgba(255, 255, 255);

      backdrop-filter: blur(2px);
      .text {
        font-family: var();
        font-size: 12px;
        font-weight: 700;
      }
    }
  }
`;
