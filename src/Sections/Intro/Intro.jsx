import React from "react";
import styled from "styled-components";
import { Size } from "../../Components/Components";

//import Images

import IntroBg from "../../Images/intro_bg.svg";
import Line from "../../Images/intro_line.svg";
import PF from "../../Images/seijusan.png";

const Intro = () => {
  return (
    <IntroSection>
      <Size>
        <div className="main_container">
          <div className="title">
            <p className="intro_intro">
              目標を目標のままでは終わらせない <br />
              再現性のある自分磨きを
            </p>
            <p className="intro_intro">
              トレーニング初心者から <br />
              これからさらに自分を磨きたい経験者まで <br />
              幅広くサポートします。
            </p>
          </div>
          <img src={Line} alt="" className="line" />
          <div className="text">
            <p className="content_text">
              「最近運動を始めた」という初心者の方 <br />
              「これからもっと大きくなりたい」というトレーニーの方　
              <br />
              トレーニング内容や体のケアの仕方は全く違います。
            </p>
            <p className="content_text">
              しかし、どんな目標達成にも対応できる <br />
              知識・スキル・サポート力を備えています。
            </p>
          </div>
        </div>
        <div className="image_container">
          <div className="name_vertical">
            <p className="name">中村 青樹</p>
          </div>
          <div className="image">
            <img src={PF} alt="" className="trainer" />
          </div>
          <div className="side_text">
            <p className="text">Personal Trainer</p>
          </div>
        </div>
        <Career>
          <h3>経歴</h3>
          <div className="career">
            <p className="text">
              2017年
              <span>入社</span>
            </p>
            <p className="text">
              2019年
              <span>社内昇格</span>
            </p>
            <p className="text">
              2020年
              <span>2店舗兼任店長着任</span>
            </p>
            <p className="text">
              2022年
              <span>独立</span>
            </p>
          </div>
        </Career>
        <Philosophy>
          <p>
            某有名ホテルフィットネスクラブでは高齢者を対象とした機能改善やトレーニング指導を行い、某フィットネスクラブでは老若男女問わず、トレーニング指導から幅広いレッスンを担当致しました。
            <br />
            <br />
            パフォーマンス向上の為のトレーニングや、姿勢改善の為のエクササイズ、生活習慣病の予防改善ダイエット等、運動をする事や運動を継続する難しさを日々痛感致しました。
            <br />
            <br />
            そんな様々な経験を元に、1人1人に合った適切な
            メニュー作りを心がけております。
          </p>
        </Philosophy>
      </Size>
    </IntroSection>
  );
};

export default Intro;

const IntroSection = styled.div`
  width: 100%;
  height: 1414px;
  color: white;
  background-image: url(${IntroBg});
  .main_container {
    padding-top: 54px;
    .line {
      width: max-content;

      margin: 0 auto;
    }
    .title {
      display: flex;
      flex-direction: column;
      gap: 27px;
      width: 314px;
      margin: 0 auto;
      .intro_intro {
        font-size: 16px;
        line-height: 40px;
      }
    }
    .text {
      padding-top: 14px;
      display: flex;
      flex-direction: column;
      gap: 22px;
      .content_text {
        font-size: 12px;
        line-height: 34px;
        font-weight: 100;
      }
    }
  }
  .image_container {
    position: relative;
    right: 15px;
    .name_vertical {
      position: absolute;
      top: 51px;
      left: 28px;
      .name {
        writing-mode: vertical-rl;
        letter-spacing: 7px;
        font-size: 27px;
        font-weight: 700;
        padding: 29px 16px;
        background-color: #000;
      }
    }
    .image {
      width: 200px;
      height: 200px;
      background-color: white;
      margin: 60px auto;
      .trainer {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
    .side_text {
      position: absolute;
      top: 77px;
      right: -55px;
      transform: rotate(90deg);
      .text {
        font-size: 13px;
        font-family: var(--poppins);
        font-weight: 100;
        letter-spacing: 1px;
        line-height: 25px;
        border-bottom: 1px solid white;
        width: 180px;
      }
    }
  }
`;

const Career = styled.div`
  width: max-content;
  margin: 0 auto;
  padding-top: 40px;

  h3 {
    width: 90px;
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid white;
  }
  .career {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    .text {
      font-size: 12px;

      span {
        margin-left: 10px;
      }
    }
  }
  .philosophy {
    margin-top: 40px;
    p {
      font-size: 13px;
      font-weight: 300;
    }
  }
`;

const Philosophy = styled.div`
  margin-top: 40px;
  font-size: 12px;
  line-height: 23px;
  font-weight: 300;
`;
