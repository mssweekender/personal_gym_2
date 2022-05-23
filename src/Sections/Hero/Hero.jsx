import React from "react";
import styled from "styled-components";

//import Images
import Himg from "../../Images/hero-1.svg";
import Himg2 from "../../Images/hero-2.svg";
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
        <img src={Himg} alt="" className="hero-1" />
        <img src={Himg2} alt="" className="hero-2" />
        {/* <div className="text"></div>
        <div className="text"></div> */}
      </HeroMain>
      <BottomContainer>
        <div className="bottom_left"></div>
        <div className="bottom_right">
          <img src={Man} alt="" className="man" />
          <img src={Lady} alt="" className="girl" />
        </div>
      </BottomContainer>
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

  &::after {
    content: "";
    width: 100%;
    height: 844px;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const HeroTitle = styled.div`
  position: relative;
  z-index: 1;
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
  position: relative;
  z-index: 1;
  width: 314px;
  margin: 30px auto -20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .text {
    height: 60px;
  }
  .hero-1 {
    width: 80%;
    margin: 0 auto;
  }
  .hero-2 {
    margin: 0 auto;
    width: 300px;
  }
`;

const BottomContainer = styled.div`
  width: 314px;
  margin: -20px auto 0 auto;
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
      margin-right: -100px;
      position: relative;
      top: 140px;
      z-index: 100;
      background: transparent;
    }
    .girl {
      position: relative;
      z-index: 100;
      background: transparent;
      width: 164px;
      height: 400px;
    }
  }
`;
