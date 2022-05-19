import React from "react";
import styled from "styled-components";
import { Size2, Size } from "../../Components/Components";

import { Button } from "../../Components/Components";

import Red from "../../Images/contact-left-red.png";

const Contact = () => {
  return (
    <ContactContainer>
      <Size2>
        <TitleSection>
          <div className="title">
            <TitleRed>60秒で完結！</TitleRed>
            <TitleBlack>お問い合わせまでの流れ</TitleBlack>
          </div>
        </TitleSection>
        <MainSection>
          <Contents>
            <p className="title_num">
              01
              <span className="num">LINE公式アカウントを追加</span>
            </p>
            <p className="text">
              「LINEからのお問い合わせはこちら」 から、ご本人様の基本情報を
              ご入力していただきます。
            </p>
            <p className="title_num">
              02
              <span className="num">５つのアンケートへ回答</span>
            </p>
            <p className="text">
              LINEを追加してすぐに表示される
              メッセージをよく読んでからアンケート
              へのご回答をお願いいたします。
            </p>
            <p className="title_num">
              03
              <span className="num">回答後はスタンプを送信</span>
            </p>
            <p className="text">
              公式LINEのシステム上、こちらから
              初めにご連絡することができません。 何卒、ご協力お願いいたします。
            </p>
          </Contents>
        </MainSection>
        <CostSection>
          <div className="title_section">
            <p className="title">料金概要</p>
          </div>
          <Price>
            <div className="price">
              <div className="price_content">
                <p className="content">短期集中したいあなた</p>
                <div className="price_details">
                  <div className="detail_left">
                    <p className="big">30</p>
                    <p className="small">min</p>
                  </div>
                  <div className="detail_right">
                    <p>
                      4300
                      <span>yen</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="price">
              <div className="price_content">
                <p className="content">ちょうどいいが好きなあなた</p>
                <div className="price_details">
                  <div className="detail_left">
                    <p className="big">45</p>
                    <p className="small">min</p>
                  </div>
                  <div className="detail_right">
                    <p>
                      5950
                      <span>yen</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="price">
              <div className="price_content">
                <p className="content">じっくりと取り組みたいあなた</p>
                <div className="price_details">
                  <div className="detail_left">
                    <p className="big">60</p>
                    <p className="small">min</p>
                  </div>
                  <div className="detail_right">
                    <p>
                      7600
                      <span>yen</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Price>
          <Button />
        </CostSection>
        <Size>
          <PlaceSection>
            <div className="title_section">
              <p className="title">実施場所</p>
            </div>
            <p>※ 新規店舗展開予定中</p>
            <IframeSection>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.3288637781898!2d135.57866050136485!3d34.74730773032637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e192a1a60eab%3A0x19cd8a4683faf02d!2z44K444OgIEJlYXJz5aSn5pelIOOCueODneODvOODhOOCr-ODqeODllZpdm8!5e0!3m2!1sja!2sjp!4v1652852756910!5m2!1sja!2sjp"
                width="314"
                height="314"
                style={{ border: 0 }}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </IframeSection>
            <p className="address">
              大阪府門真市向島町3-35 <br /> ショッピングモールBearsイースト館１F
            </p>
            <MapBtn type="button">地図を見る</MapBtn>
          </PlaceSection>
        </Size>
      </Size2>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  width: 100%;
  padding: 60px 0;
`;

const TitleSection = styled.div`
  padding: 60px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  .title {
  }
  &::before,
  ::after {
    content: "";
    width: 2px;
    height: 40px;
    background-color: black;
  }

  &::before {
    transform: rotate(-30deg);
  }
  &::after {
    transform: rotate(30deg);
  }
`;

const TitleRed = styled.h3`
  text-align: center;
  padding-bottom: 10px;
  color: red;
  font-weight: 700;
`;

const TitleBlack = styled.h3`
  width: max-content;
  font-weight: 700;
  color: black;
  text-align: center;
`;

const MainSection = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  &::before {
    position: absolute;
    top: 30px;
    left: 0;
    z-index: -1;
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(${Red});
  }
`;

const Contents = styled.div`
  width: 80%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .title_num {
    color: var(--enji);
    font-weight: 700;
    font-style: italic;
    font-size: 30px;
    font-family: var(--poppins);
    .num {
      font-family: var(--noto);
      font-size: 15px;
      font-weight: 700;
      margin-left: 20px;
      font-style: normal;
    }
  }
  .text {
    width: 70%;
    margin-top: -10px;
    margin-left: 40px;
    font-size: 12px;
    font-weight: 300;
  }
`;

const CostSection = styled.div`
  padding-top: 80px;

  .title_section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    .title {
      width: max-content;
      margin: 0 auto;
      font-size: 20px;
      font-family: var(--noto);
      font-weight: 700;
      position: relative;

      &::after {
        position: absolute;
        top: calc(100% + 4px);
        left: 10%;
        content: "";
        width: 80%;
        height: 2px;
        background-color: var(--enji);
        margin: 0 auto;
      }
    }
  }
`;

const Price = styled.div`
  width: 100%;

  margin: 60px auto;
  .price {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    .price_content {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .content {
        text-align: center;
        color: white;
        min-width: 210px;
        padding: 4% 8%;
        font-weight: 500;
        font-size: 12px;
        border-radius: 30px;
        background-color: var(--enji);
      }
      .price_details {
        display: flex;
        flex-direction: row;

        padding: 10px 20px;
        gap: 10px;
        border-bottom: 2px dashed lightgray;
        .detail_left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          .big {
            margin-top: 10px;
            margin-bottom: -10px;
            text-align: center;
            font-size: 25px;
            font-weight: 500;
            font-family: var(--poppins);
          }
          .small {
            text-align: center;
            font-size: 12px;
            font-weight: 500;
          }
        }
        .detail_right {
          p {
            font-family: var(--noto);
            font-size: 42px;
            font-weight: 700;
            color: var(--enji);
            span {
              font-size: 13px;
              color: black;
              margin-left: 5px;
            }
          }
        }
      }
    }
  }
`;

const PlaceSection = styled.div`
  margin-top: 70px;
  .title_section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    .title {
      width: max-content;
      margin: 0 auto;
      font-size: 20px;
      font-family: var(--noto);
      font-weight: 700;
      position: relative;

      &::after {
        position: absolute;
        top: calc(100% + 4px);
        left: 10%;
        content: "";
        width: 80%;
        height: 2px;
        background-color: var(--enji);
        margin: 0 auto;
      }
    }
  }
  P {
    width: max-content;
    margin: 20px auto;
  }
  .address {
    width: 314px;
    font-size: 12px;
    font-weight: 200;
  }
`;

const IframeSection = styled.div`
  margin: 40px auto 5px auto;
  width: 314px;
  height: 314px;
`;

const MapBtn = styled.button`
  display: block;
  margin: 30px auto;
  width: 60%;
  padding: 8px 20px;
  background-image: var(--gradient);
  color: white;
  border-radius: 30px;
  font-size: 13px;
  box-shadow: 3px 4px 16px -6px rgba(0, 0, 0, 0.6);
  transition: all 0.4s ease-in-out;
  transition-duration: 0.3s;

  &:hover {
    box-shadow: 7px 8px 25px -6px rgba(0, 0, 0, 0.5);
  }
`;
