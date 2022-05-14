import React from "react";
import styled from "styled-components";

//import Images

import IntroBg from "../../Images/intro_bg.svg";
import Line from "../../Images/intro_line.svg";

const Intro = () => {
  return (
    <IntroSection>
      <IntroSize>
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
      </IntroSize>
    </IntroSection>
  );
};

export default Intro;

const IntroSection = styled.div`
  width: 100%;
  height: 1414px;
  color: white;
  background-image: url(${IntroBg});
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
`;

const IntroSize = styled.div`
  width: 314px;
  margin: 0 auto;
  padding-top: 54px;
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
`;
