import React from "react";
import styled from "styled-components";

//import Images

import BG from "../../Images/hero-bg.svg";
import Man from "../../Images/fitness-man.svg";
import Lady from "../../Images/fitness-girl 1.svg";

const Hero = () => {
  return (
    <HeroSection>
      <HeroTitle>
        <p>トレーニング</p>
        <p>スポーツ整体</p>
        <p>健康管理</p>
      </HeroTitle>
      <HeroMain>
        <div className="text"></div>
        <div className="text"></div>
      </HeroMain>
      <BottomContainer>
        <div className="bottom_left">
          {/* <div className="content">
            <p className="content_first ">入会金</p>
            <p className="strong">
              0<span>円</span>
            </p>
          </div>
          <div className="content">
            <p className="content_first">大会出場者</p>
            <p className="content_second">多数</p>
          </div> */}
        </div>
        <div className="bottom_right">
          <img src={Man} alt="" className="man" />
          <img src={Lady} alt="" className="girl" />
        </div>
      </BottomContainer>
      <Gradient>
        <div className="minutes">
          <p>
            30<span>分</span>
          </p>
        </div>
        <div className="price">
          <p>
            4300<span>円 ~</span>
          </p>
        </div>
      </Gradient>
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

const HeroMain = styled.div`
  width: 314px;
  margin: 30px auto;
  .text {
    height: 60px;
    background-color: white;
  }
`;

const BottomContainer = styled.div`
  width: 314px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .bottom_left {
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin-top: 90px;
    .content {
      border-radius: 50%;
      width: 107px;
      height: 105px;
      background-color: transparent;
      border: 3px solid white;
      color: white;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .strong {
        font-size: 55px;
        line-height: 55px;

        margin-bottom: -15px;
        span {
          font-size: 18px;
          font-weight: 500;
        }
      }
      .content_first {
        width: 71px;
        font-size: 13px;
        font-weight: 500;
      }
      .content_second {
        font-size: 35px;
        font-weight: 700;
      }
    }
  }
  .bottom_right {
    display: flex;
    flex-direction: row;
    .man {
      width: 213px;
      height: 339px;
      margin-right: -150px;
      position: relative;
      top: 140px;
      z-index: 10;
      background: transparent;
    }
    .girl {
      background: transparent;
      width: 164px;
      height: 400px;
    }
  }
`;

const Gradient = styled.div`
  width: 100%;
  height: 200px;
  /* background-image: var(--gradient_opacity); */
  .minutes {
    position: relative;
    top: 20px;
    left: 50px;
    p {
      font-family: Futura, Trebuchet MS, Arial, sans-serif;
      position: relative;
      z-index: 99;
      font-size: 30px;
      font-weight: bolder;
      font-style: italic;
      -webkit-text-stroke: 1px white;
      -moz-text-shadow: 7px 3px 8px rgba(0, 0, 0, 0.52);
      -webkit-text-shadow: 7px 3px 8px rgba(0, 0, 0, 0.52);
      -ms-text-shadow: 7px 3px 8px rgba(0, 0, 0, 0.52);
      text-shadow: 7px 3px 8px rgba(0, 0, 0, 0.52);
      /* background: linear-gradient(to right, #d60f0f 0%, #e56e00 100%);
      background-clip: text;
      -webkit-background-clip: text; */
      /* -webkit-text-fill-color: transparent; */
      span {
        -webkit-text-stroke: 1px white;
        font-size: 20px;
        font-family: var(--noto);
      }
    }
  }
  .price {
    width: max-content;
    position: relative;
    top: 20px;
    left: 30px;
    /* font-family: var(--poppins); */
    p {
      margin-left: 20px;
      font-family: Futura, Trebuchet MS, Arial, sans-serif;
      position: relative;
      z-index: 99;
      font-size: 80px;
      font-weight: bolder;
      font-style: italic;
      -webkit-text-stroke: 1px white;
      -moz-text-shadow: 7px 3px 8px rgba(0, 0, 0, 0.52);
      -webkit-text-shadow: 7px 3px 8px rgba(0, 0, 0, 0.52);
      -ms-text-shadow: 7px 3px 8px rgba(0, 0, 0, 0.52);
      text-shadow: 7px 3px 8px rgba(0, 0, 0, 0.52);
      /* background: linear-gradient(to right, #d60f0f 0%, #e56e00 100%);
      background-clip: text;
      -webkit-background-clip: text; */
      /* -webkit-text-fill-color: transparent; */
      span {
        -webkit-text-stroke: 1px white;
        font-size: 20px;
        font-family: var(--noto);
      }
    }
  }
`;
