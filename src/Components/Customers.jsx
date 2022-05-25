import React from "react";
import styled from "styled-components";

import Profile from "../Images/customer-1.svg";
import Profile2 from "../Images/customer-2.svg";
import { ImArrowUpRight } from "react-icons/im";

const voices = [
  {
    image: Profile,
    detail: "30代前半・男性",
    name: "たくみ",
    main: "とにかく丁寧でわかりやすい!",
    text: "25歳頃から運動をする機会が減り体重が増えそれに伴い見た目もだらしなくなりました。このままでは駄目だと思い、知識と経験のあるトレーナーについてもらいトレーニングを始めました。",
    text_2:
      "自分に合ったトレーニング方法を丁寧に教えてくださり、楽しくできました。扱える重量も増え、成長している実感が湧きとても嬉しいです。",
    weight_before: "80",
    weight_after: "62",
  },
  {
    image: Profile,
    detail: "20代後半・男性",
    name: "りょう",
    main: "肥満体型から、超健康な体へ大変身!",
    text: "ひとりでトレーニングしている時は、は合ってているかがわからず、モチベーションが保てませんでした。でも、このパーソナルトレーニングでは、トレーニング内容が豊富で飽きず、モチベーションを保って痩せることが出来ました。",
    text_2:
      "また、トレーニングでの正確なフォームも改善して頂けるので凄く助かりました。個人で出来るメニューも沢山教えて頂き今も継続して出来ています。",
    weight_before: "81",
    weight_after: "62",
  },
];

const Customers = () => {
  return (
    <div>
      <VoiceSection>
        <Container>
          <CustomerProfile>
            <ContentImage src={Profile2} />
          </CustomerProfile>
          <Content>
            <div className="above_section">
              <p className="detail">60代・女性</p>
              <p className="name">
                かなこ<span>さん（仮）</span>
              </p>
            </div>
            <div className="main_text">
              <p className="main">大会で好成績を残せた！</p>
            </div>
            <div className="result_section">
              <div className="result">
                <div className="result_content">
                  <p className="succeed">実績</p>
                  <ul className="list">
                    <li className="item">
                      某フィットネスクラブ 2019近畿大会優勝
                    </li>
                    <li className="item">
                      某フィットネスクラブ 2019ファイナルグランプリ3位
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="below_section">
              <p className="text">
                フォームや姿勢など的確に教えて頂き分かりやすくて、楽しいです。
              </p>
              <p className="text">
                受けている人を、飽きさせないコミニケーションも、素晴らしいですね。
                トレーニングの際にどこの筋肉を使っているのかを、分かりやすく教えて頂いて、意識しながらのトレーニングは最高です。
              </p>
            </div>
          </Content>
        </Container>
        {voices.map((voice) => (
          <Container>
            <CustomerProfile>
              <ContentImage src={voice.image} />
            </CustomerProfile>
            <Content>
              <div className="above_section">
                <p className="detail">{voice.detail}</p>
                <p className="name">
                  {voice.name} <span>さん（仮）</span>
                </p>
              </div>
              <div className="main_text">
                <p className="main">{voice.main}</p>
              </div>
              <div className="result_section">
                <div className="result">
                  <div className="before_section">
                    <p className="before">Before</p>
                    <p className="weight_section">
                      <span className="weight">{voice.weight_before}</span>
                      <span className="kg">kg</span>
                    </p>
                  </div>
                  <div className="arrow_section">
                    <p>1年後</p>
                    <ImArrowUpRight size={30} />
                  </div>
                  <div className="after_section">
                    <p className="after">After</p>
                    <div className="weight_section">
                      <span className="weight">{voice.weight_after}</span>
                      <span className="kg">kg</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="below_section">
                <p className="text">{voice.text}</p>
                <p className="text">{voice.text_2}</p>
              </div>
            </Content>
          </Container>
        ))}
        <Container>
          <CustomerProfile>
            <ContentImage src={Profile} />
          </CustomerProfile>
          <Content>
            <div className="above_section">
              <p className="detail">40代前半・男性</p>
              <p className="name">
                まこと<span>さん（仮）</span>
              </p>
            </div>
            <div className="main_text">
              <p className="main">大怪我からたった３ヶ月で、運動復帰できた！</p>
            </div>
            <div className="result_section">
              <div className="result">
                <div className="before_section">
                  <p className="before">Before</p>
                  <p className="weight_section">
                    <span className="weight">6</span>
                    <span className="kg">ヶ月</span>
                  </p>
                </div>
                <div className="arrow_section">
                  {/* <p>1年後</p> */}
                  <ImArrowUpRight size={30} />
                </div>
                <div className="after_section">
                  <p className="after">After</p>
                  <div className="weight_section">
                    <span className="weight">3</span>
                    <span className="kg">ヶ月</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="below_section">
              <p className="text">
                膝に大きな怪我（半月板水平断裂）を負い、当時はまともに歩ける状態ではありませんでした。病院でも運動復帰できるまでは6ヶ月ほどかかると言われていたのですが、中村さんにサポートしていただいたことで、たった3ヶ月で運動復帰することができました。
              </p>
              <p className="text">
                はじめは、関節の可動域を広げるところから始まり、3ヶ月で日常生活レベルの負荷に合わせた筋力トレーニングまでできるようになり、早く日常生活に戻れただけではなく、運動もできるようになったのでとても救われました。
              </p>
            </div>
          </Content>
        </Container>
      </VoiceSection>
    </div>
  );
};

export default Customers;

const VoiceSection = styled.div`
  margin: 120px auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Container = styled.div`
  padding: 50px 20px;
  background-color: white;
  transform: skew(0deg, -10deg);
  border-radius: 31px;
  position: relative;
`;

const ContentImage = styled.img`
  width: 100%;
`;

const Content = styled.div`
  transform: skew(0deg, 10deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  .above_section {
    margin-top: 30px;
    margin-left: auto;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #545454;
    padding-left: 20px;
    padding-right: 20px;

    .detail {
      width: max-content;
      font-size: 11px;
    }
    .name {
      width: max-content;
      font-size: 18px;
      font-weight: 500;
      span {
        font-size: 13px;
      }
    }
  }
  .main_text {
    .main {
      max-width: 300px;
      margin: 0 auto;
      padding: 10px 20px;
      color: white;
      background-color: var(--enji);
      word-break: keep-all;
      text-align: center;
    }
  }
  .result_section {
    width: 100%;
    padding: 10px 0;
    background-color: #f0f0f0;
    margin: 0 auto;
    border-radius: 5px;
    .result {
      width: 95%;
      margin: 0 auto;

      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;

      .before_section {
        width: max-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .before {
          width: max-content;
          text-align: center;
        }
        .weight {
          font-size: 50px;
          line-height: 60px;
          font-family: Futura, Trebuchet MS, Arial, sans-serif;
          font-weight: bolder;
          font-style: italic;
          display: ${(props) => props.display};
          margin-right: 6px;
          .kg {
          }
        }
        .weight_false {
          display: none;
        }
      }
      .arrow_section {
        margin-top: 10px;
        transform: rotate(45deg);
        p {
          font-size: 10px;
          transform: translateX(-20px) rotate(-45deg);
        }
      }
      .after_section {
        width: max-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        .after {
          text-align: center;
        }
        .weight_section {
          display: flex;
          flex-direction: row;
          align-items: baseline;
          text-align: center;
          .weight {
            font-size: 50px;
            line-height: 60px;
            font-family: Futura, Trebuchet MS, Arial, sans-serif;
            font-weight: bolder;
            font-style: italic;

            margin-right: 6px;

            background: linear-gradient(to right, #d60f0f 0%, #e56e00 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            .kg {
              display: inline-block;
            }
          }
        }
      }
      .result_content {
        width: 95%;
        margin: 0 auto;
        .succeed {
          font-size: 12px;
          color: white;
          border-radius: 30px;
          width: max-content;
          padding: 5px 20px;
          background-color: var(--enji);
        }
        .list {
          margin-left: 10px;
          padding: 10px 10px 5px 10px;
          .item {
            list-style: none;
            font-size: 10px;
            line-height: 23px;
          }
        }
      }
    }
  }
  .below_section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .text {
      font-size: 13px;
      line-height: 21px;
    }
  }
`;

const CustomerProfile = styled.div`
  width: 120px;
  height: 120px;
  padding: 20px;
  position: absolute;
  background-color: #fff0f0;
  top: -70px;
  left: 20px;
  z-index: 999;
  transform: skew(0deg, 10deg);
  border-radius: 50%;
  border: 2px solid var(--enji);
`;
