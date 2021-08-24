import React, { useState } from "react";
import styled from "styled-components";
import profile from "./image/profile.png";
import profileButton from "./image/changeProfile.png";
import contentImage from "./image/contentImg.png";
import { Link } from "react-router-dom";

import HomeButton from "./components/HomeButton";
import TopBar from "./components/TopBar";
import MyWritinglist from "./components/MyWritinglist";
import Contentachievement from "./components/Contentachievement";
import SignIn from "./SignIn"; //로그인 정보를 받아오기 위해

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

//마이페이지
class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.username = "이채영";
    this.userId = "lchy0413";
    this.userImg= "";
    this.state = {
      All_achievement: "",
      basic: [
        {
          id: "1",
          title: "개미와 베짱이",
          achievement: "40",
          img: contentImage,
        },
      ],
      hard: [
        {
          id: "2",
          title: "알라딘의 요술램프",
          achievement: "50",
          img: contentImage,
        },
        {
          id: "3",
          title: "신데렐라",
          achievement: "100",
          img: contentImage,
        },
      ],
      mywriting: [
        {
          title: "Basic 3강에서 질문있습니다! 자꾸 에러가 나요.",
          question: "3강을 수강하는 중에 에러가 납니다. 어떻게 해야할까요?",
          date: "2021.07.24 오전 11:30",
        },
        {
          title: "1강에서 이해가 안되는 것이 있어요.",
          question: "기타가 어떻게 소리가 나게 되는 건가요!?",
          date: "2021.07.24 오전 11:15",
        },
        {
          title: "질문이 있습니다.",
          question:
            "기타가 어떻게 소리가 나게 되는 건가요!? 기타가 어떻게 소리가 나게 되는 건가요!? 기타가 어떻게 소리가 나게 되는 건가요!? 기타가 어떻게 소리가 나게 되는 건가요!? 기타가 어떻게 소리가 나게 되는 건가요!?",
          date: "2021.07.24 오전 11:15",
        },
      ],
    };
    //this.serverConnect = this.serverConnect.bind(this);
    this.userphotoChange = this.userphotoChange.bind(this);
  }
  callMywritingApi = async () => {
    // serverConnect()에서 데이터 받아올 때 해당 URL로 불러와주는 function
    const response = await fetch("api/mypage/mywriting");
    const body = await response.json();
    return body;
  };

  callBasicAchievementApi = async () => {
    // serverConnect()에서 데이터 받아올 때 해당 URL로 불러와주는 function
    const response = await fetch("api/mypage/basicachievement");
    const body = await response.json();
    return body;
  };
  callHardAchievementApi = async () => {
    // serverConnect()에서 데이터 받아올 때 해당 URL로 불러와주는 function
    const response = await fetch("api/mypage/hardachievement");
    const body = await response.json();
    return body;
  };

  componentDidMount(){
      console.log(this.props.user);
      this.timer = setInterval(this.progress, 20);

      this.callMywritingApi()
      .then((res) => this.setState({mywriting: res}))
      .catch((err) => console.log(err));

      this.callBasicAchievementApi()
      .then((res) => this.setState({basic: res}))
      .catch((err) => console.log(err));

      
      this.callBasicAchievementApi()
      .then((res) => this.setState({hard: res}))
      .catch((err) => console.log(err));
  }

  userphotoChange(){
    //CHECK Image 올려서 DB에 저장할 수 있게 하기
      console.log('in');
  }

  render() {
    return (
      <div>
        <Header>
          <Link to={"/"}>
            <HomeButton>#.</HomeButton>
          </Link>
          <MarginLeft />
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
            <div style={{ lineHeight: "40px" }}>{this.username} 님</div>
          </UserInfo>
          {/* <RoundButton>로그인</RoundButton> */}
        </Header>
        <Container>
          <Profile>
            <ProfileImg src={profile}></ProfileImg>
            <ProfileBtn onClick={this.userphotoChange}>
              <img src={profileButton}></img>
            </ProfileBtn>
          </Profile>

          <div style={{ marginBottom: "60px" }}>
            <div>
              <Title>진도 현황</Title>
              {this.state.basic.map((c) => {
                return (
                  <Contentachievement
                    img={c.img}
                    id={c.id}
                    title={c.title}
                    achievement={c.achievement}
                  />
                );
              })}
              {this.state.hard.map((c) => {
                return (
                  <Contentachievement
                    img={c.img}
                    id={c.class_id}
                    title={c.title}
                    achievement={c.complete}
                  />
                );
              })}
            </div>
            <div>
              <Title style={{ marginTop: "60px" }}>내 글 목록</Title>
              <div>
                {this.state.mywriting.map((c) => {
                  return (
                    <MyWritinglist
                      title={c.title}
                      question={c.body}
                      date={c.date}
                    />
                  );
                })}
              </div>
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
  }
}

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

export default MyPage;
