import React from "react";
import styled from "styled-components";

import {
  SectionTitle,
  SubTitle,
  Size2,
  MainTitle,
  TitleFlex,
} from "../../Components/Components";

import { TiArrowSortedDown } from "react-icons/ti";

const Desire = () => {
  return (
    <DesireContainer>
      <Size2>
        <SectionTitle>
          <TitleFlex>
            <SubTitle>以下に当てはまる方は</SubTitle>
            <MainTitle>ぜひご相談ください</MainTitle>
          </TitleFlex>
        </SectionTitle>
      </Size2>
      <MainContainer>
        <div className="desire_container">
          <div className="desire">
            <div className="desire_title">
              <p className="num">01</p>
              <div className="title">
                健康のために <br /> 楽しく継続したい
              </div>
            </div>
            <div className="customer_voice">
              <div className="detail">
                <p>30代後半・女性</p>
              </div>
              <div className="text">
                <p>
                  これからの健康のことも考えて運動に取り組みたいけど、
                  <br />
                  あまり継続できる気がしなくて心配 . . .
                </p>
              </div>
            </div>
            <div className="arrow">
              <TiArrowSortedDown size={45} style={{ color: "#B3424A" }} />
            </div>
          </div>
          <div className="answer">
            <p>
              『トレーニング＝有酸素運動・筋肉を酷使した筋トレ』というイメージがあるかもしれませんが、
              実は、ミニボールやゴムチューブなどを使って５〜１０分で完結して、効果が抜群に出るものもあります！
              <br />
              <br />
              そのようなトレーニングは、ゲームのような感覚で楽しく取り組むことができます！
              運動をしていくにつれて、体が軽くなって日々の生活が楽になるので、その感覚を実感していただけるだけでも、運動を楽しく思ってもらえると思います！
            </p>
          </div>
        </div>
        <div className="desire_container">
          <div className="desire">
            <div className="desire_title">
              <p className="num">02</p>
              <div className="title">
                継続はできているけど <br />
                結果に繋がらない
              </div>
            </div>
            <div className="customer_voice">
              <div className="detail">
                <p>20代前半・男性</p>
              </div>
              <div className="text">
                <p>
                  トレーニングを始めてから半年以上経つけど、あまり変化がない。現状のトレーニングが間違っているのか心配
                  . . .
                </p>
              </div>
            </div>
            <div className="arrow">
              <TiArrowSortedDown size={45} style={{ color: "#B3424A" }} />
            </div>
          </div>
          <div className="answer">
            <p>
              継続できているところ、とても素晴らしいです！
              あと考えるべきなのは、 <br />
              <br />
              <strong>・行なっているトレーニング強度が適切なのか</strong>
              <br />
              <strong>・適切な食生活が送れているのか</strong> <br />
              <br />
              などの点を考慮していく必要があります。 <br />
              なので、以上のような点も含めて、一度ご相談ください！
            </p>
          </div>
        </div>
        <div className="desire_container">
          <div className="desire">
            <div className="desire_title">
              <p className="num">03</p>
              <div className="title">
                厳しい食事制限はせず <br />
                ダイエットしたい
              </div>
            </div>
            <div className="customer_voice">
              <div className="detail">
                <p>20代後半・女性</p>
              </div>
              <div className="text">
                <p>
                  ある程度、食事を管理しながら、ダイエットに取り組みたいけど、何から手をつけていいのかわからない.
                  . .
                </p>
              </div>
            </div>
            <div className="arrow">
              <TiArrowSortedDown size={45} style={{ color: "#B3424A" }} />
            </div>
          </div>
          <div className="answer">
            <p>
              やはり食事制限は、ダイエット・シェイプアップを行なっていく上で、ネックになりますよね！
              <br />
              <br />
              トレーニングを行い、減量をしていく過程の中で、日々自分の体重が変わっていくことで食事に対する考え方が変わっていき、
              自ずと食事制限をするようになるのが人の面白いところです。
              <br />
              <br />
              食生活改善を主として始めるので、ストレスなく目標達成に向けて始められると思います。
              なので、一緒に頑張っていきましょう！
            </p>
          </div>
        </div>
      </MainContainer>
    </DesireContainer>
  );
};

export default Desire;

const DesireContainer = styled.div`
  width: 100%;

  padding-top: 60px;
`;

const MainContainer = styled.div`
  margin-top: 80px;
  .desire_container {
    margin-top: 60px;
    .desire {
      .desire_title {
        width: max-content;
        margin: 30px auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        .num {
          font-family: var(--poppins);
          font-size: 40px;
          font-weight: 800;
          font-style: italic;
          color: white;
          letter-spacing: 2px;
          -webkit-text-stroke: 3px var(--enji);
        }
        .title {
          font-size: 18px;
          font-weight: 700;
          color: var(--enji);
        }
      }
      .customer_voice {
        width: 340px;
        margin: 0 auto;
        .detail {
          width: max-content;
          p {
            width: max-content;
            padding: 10px 20px;
            font-size: 14px;
            background-color: #939393;
            color: white;
            font-weight: 500;
            border-radius: 20px;
          }
        }
        .text {
          p {
            padding: 30px 20px 20px 20px;
            border: 2px solid #939393;
            font-size: 10px;
            line-height: 23px;
            font-weight: 300;
            margin-top: -20px;
            margin-left: 1.5rem;
            border-radius: 5px;
          }
        }
      }
      .arrow {
        width: max-content;
        margin: 30px auto 0 auto;
      }
    }
    .answer {
      margin-top: 30px;
      width: 100%;
      padding-top: 40px;
      padding-bottom: 40px;
      background-color: var(--enji);
      p {
        line-height: 30px;
        color: white;
        width: 314px;
        margin: 0 auto;
        font-weight: 300;
        font-size: 14px;
      }
    }
  }
`;
