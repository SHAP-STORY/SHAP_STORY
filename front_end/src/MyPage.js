import React, { useState } from "react";
import styled from "styled-components";
import profile from "./image/profile.png";
import profileButton from "./image/changeProfile.png";
import contentImage from "./image/contentImg.png";
import playIcon from "./image/playIcon.png";
import { Link } from "react-router-dom";

import HomeButton from "./components/HomeButton";
import TopBar from "./components/TopBar";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

//수업 별 진도현황의 progress bar 컴포넌트
const Progress = ({ done }) => {
  return (
    <ProgressBar>
      <ProgressDone style={{ width: done }} />
    </ProgressBar>
  );
};

const ProgressBar = styled.div`
  width: 200px;
  height: 5px;
  background-color: #d6d6d6;
`;

const ProgressDone = styled.div`
  height: 5px;
  background-color: #32cf99;
`;

//마이페이지
const MyPage = (props) => {
  return (
    <div>
      <Header>
        <Link to={"/"}>
          <HomeButton>#.</HomeButton>
        </Link>
        <MarginLeft/>
        <TopBar></TopBar>
        <UserInfo>
          <img
            src={profile}
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "30px",
              margin: "auto 5px",
            }}
          ></img>
          <div style={{ lineHeight: "40px" }}>ooo님</div>
        </UserInfo>
        {/* <RoundButton>로그인</RoundButton> */}
      </Header>
      <Container>
        <Profile>
          <ProfileImg src={profile}></ProfileImg>
          <ProfileBtn>
            <img src={profileButton}></img>
          </ProfileBtn>
        </Profile>

        <div>
          <div>
            <Title>진도 현황</Title>
            <Class>
              <img
                src={contentImage}
                style={{
                  borderTopLeftRadius: "15px",
                  borderBottomLeftRadius: "15px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  margin: "auto",
                  width: "150px",
                }}
              >
                <div style={{ fontWeight: "bold" }}>1차시</div>
                <div style={{ fontSize: "14px", marginTop: "5px" }}>
                  개미와 베짱이
                </div>
              </div>
              <div style={{ display: "flex", margin: "auto 0" }}>
                <Progress done="40%" />
                <text
                  style={{
                    marginLeft: "15px",
                    lineHeight: "10px",
                    color: "#A7A7A7",
                  }}
                >
                  40%
                </text>
              </div>
              <PlayButton>
                <img src={playIcon}></img>
              </PlayButton>
            </Class>
            <Class>
              <img
                src={contentImage}
                style={{
                  borderTopLeftRadius: "15px",
                  borderBottomLeftRadius: "15px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  margin: "auto",
                  width: "150px",
                }}
              >
                <div style={{ fontWeight: "bold" }}>2차시</div>
                <div style={{ fontSize: "14px", marginTop: "5px" }}>
                  알라딘의 요술램프
                </div>
              </div>
              <div style={{ display: "flex", margin: "auto 0" }}>
                <Progress done="40%" />
                <text
                  style={{
                    marginLeft: "15px",
                    lineHeight: "10px",
                    color: "#A7A7A7",
                  }}
                >
                  40%
                </text>
              </div>
              <PlayButton>
                <img src={playIcon}></img>
              </PlayButton>
            </Class>
          </div>
          <div>
            <Title style={{ marginTop: "30px" }}>내 글 목록</Title>
            <Question>
              <h4>Basic 3강에서 질문있습니다! 자꾸 에러가 나요</h4>
              <text
                style={{ position: "relative", top: "-44px", left: "480px" }}
              >
                작성일: 2021.07.24 오전 11:30
              </text>
              <text style={{ position: "relative", left: "-210px" }}>
                3강을 수강하는 중에 에러가 납니다. 어떻게 해야할까요?
              </text>
            </Question>
            <Question>
              <h4>Basic 3강에서 질문있습니다! 자꾸 에러가 나요</h4>
              <text
                style={{ position: "relative", top: "-44px", left: "480px" }}
              >
                작성일: 2021.07.24 오전 11:30
              </text>
              <text style={{ position: "relative", left: "-210px" }}>
                3강을 수강하는 중에 에러가 납니다. 어떻게 해야할까요?
              </text>
            </Question>
          </div>
        </div>

        <div style={{ margin: "auto" }}>
          <Title>전체 진도 현황</Title>
          <div
            style={{
              boxShadow: "4px 4px 4px 4px #D6D6D6",
              borderRadius: "10px",
              padding: "20px",
              width: "250px",
              height: "260px",
            }}
          >
            <CircularProgressbarWithChildren
              value={50}
              styles={buildStyles({
                trailColor: "#D6D6D6",
                pathColor: "#32CF9A",
              })}
            >
              <div style={{ fontSize: "20px" }}>50%</div>
              <div style={{ fontSize: "20px" }}>finished</div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </Container>
    </div>
  );
};

const Title = styled.div`
  display: flex;
  padding: 0 0 0 20px;
  margin: 15px 0;
  font-size: 20px;
`;

//----------------------------------------------
//Header 부분 스타일

const Header = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 0 25px 0;
`;

const MarginLeft = styled.div`
  margin-left: auto;
`;

const UserInfo = styled.div`
  margin: 60px 50px 0px 15px;
  font-size: 17px;
  float: right;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const RoundButton = styled.button`
  margin: 60px 50px 0px 15px;
  font-size: 17px;
  float: right;
  background-color: #3f3d56;
  border: 0;
  color: white;
  width: 110px;
  height: 40px;
  border-radius: 30px;
`;

//---------------------------------------------
//Main Section 부분 스타일링

//전체
const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 650px;
  width: 100%;
  flex-wrap: wrap;
`;

//프로필 Section
const Profile = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
`;

//프로필 이미지
const ProfileImg = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 60px;
`;

const ProfileBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 18px;
  background-color: #54b192;
  position: relative;
  top: -20px;
  border: none;
  cursor: pointer;
`;

//-------------------------------------------
//가운데 section (각 수업 진도율/ 나의 질문)

//각 수업 진도율

const Class = styled.div`
  width: 700px;
  height: 120px;
  margin: 15px auto;
  border-radius: 15px;
  box-shadow: 3px 3px 3px 3px #e2e2e2;
  display: flex;
`;

const PlayButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 15px;
  border: none;
  background-color: #32cf9a;
  box-shadow: 2px 2px 2px 2px #e2e2e2;
  margin: auto;
  cursor: pointer;
`;

const Question = styled.div`
  width: 700px;
  height: 120px;
  margin: 10px 30px;
  border-radius: 15px;
  text-align: left;
  cursor: pointer;
`;

export default MyPage;