import React, { useState } from "react";
import styled from "styled-components";
import profile from "./image/profile.png";
import profileButton from "./image/changeProfile.png";
import contentImage from "./image/contentImg.png";
import { Link } from "react-router-dom";
import { post } from "axios";

import HomeButton from "./components/HomeButton";
import TopBar from "./components/TopBar";
import MyWritinglist from "./components/MyWritinglist";
import Contentachievement from "./components/Contentachievement";
import user_info from "./variables/user_info";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button'
//Redux
import { connect } from "react-redux";
import * as actions from "./_actions/user_action";


import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

/*
NOTE 추가해야할 부분
- 진도 현황에서 연결
- 내 글 목록에서 누르면 자신의 글 크게 보기 -> Dialog
- 해당 퍼센트에이지로 칸 변하기
- Mypage에서 내 글 10글자 이상은 ...으로 보이게 하기

COMMENT
- 내 글 보기 디자인 좀더 추가
- 로그아웃 버튼
*/

//마이페이지
class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.username = user_info[2];
    this.userId = user_info[1];
    this.state = {
      All_achievement: "",
      userImg: profile,
      file: "",
      fileName: "",
      open: false,
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
    this.userDataChange = this.userDataChange.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  callUserDataApi = async () => {
    // serverConnect()에서 데이터 받아올 때 해당 URL로 불러와주는 function
    const response = await fetch("api/mypage/user");
    const body = await response.json();
    return body;
  };

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

  componentDidMount() {
    console.log(this.props.user);
    this.timer = setInterval(this.progress, 20);

    this.callMywritingApi()
      .then((res) => this.setState({ mywriting: res }))
      .catch((err) => console.log(err));

    this.callBasicAchievementApi()
      .then((res) => this.setState({ basic: res }))
      .catch((err) => console.log(err));

    this.callHardAchievementApi()
      .then((res) => this.setState({ hard: res }))
      .catch((err) => console.log(err));

    this.callUserDataApi()
      .then((res) => this.userDataChange(res))
      .catch((err) => console.log(err));
  }
  userDataChange(data) {
    this.userId = data.userId;
    this.username = data.userName;
    this.setState({
      userImg: data.userImg,
    });
  }

  userphotoChange(e) {
    this.setState({
      file: e.target.files[0],
      fileName: e.target.value,
    });
  }

  handleClickOpen() {
    this.setState({
      open: true,
    });
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  addPhoto() {
    const url = "/api/photo";
    const formData = new FormData();
    formData.append("image", this.state.file);
    formData.append("id", this.userId);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return post(url, formData, config);
  }

  handleFormSubmit() {
    this.addPhoto()
    .then((response) => {
      console.log(response.data);
      this.props.stateRefresh();
    });
    //CHECK
    //- 성공적으로 됬으면 '성공적으로 저장되었습니다. 닫기를 눌러주세요'
    //- 아니면 '다시한번 더 시도해주세요 알람'
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
            <ProfileBtn onClick={this.handleClickOpen}>
              <img src={profileButton}></img>
            </ProfileBtn>
          </Profile>
          <Dialog open={this.state.open} onClose={this.handleClose}>
            <DialogTitle>Profile 사진 변경</DialogTitle>
            <DialogContent>
              <input
                accept="image/*"
                id="raised-button-file"
                type="file"
                file={this.state.file}
                value={this.state.fileName}
                onChange={this.userphotoChange}
              />

              <label htmlFor="raised-button-file">
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  name="file"
                >
                  {this.state.fileName === ""
                    ? "프로필 이미지 선택"
                    : this.state.fileName}
                </Button>
              </label>
              <br />
            </DialogContent>

            <DialogActions>
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleFormSubmit}
              >
                저장
              </Button>

              <Button
                variant="outlined"
                color="primary"
                onClick={this.handleClose}
              >
                닫기
              </Button>
            </DialogActions>
          </Dialog>

          <div style={{ marginBottom: "60px" }}>
            <div>
              <Title>진도 현황</Title>
              {this.state.basic.map((c) => {
                return (
                  <Contentachievement
                    img={contentImage} // FIX 나중에 c.img로 수정
                    id={c.class_id}
                    title={c.title}
                    achievement={c.complete}
                  />
                );
              })}
              {this.state.hard.map((c) => {
                return (
                  <Contentachievement
                    img={contentImage} // FIX 나중에 c.img로 수정
                    id={c.class_id}
                    title={c.title}
                    achievement={c.complete}
                  />
                );
              })}
            </div>
            <div>
              <Title style={{ marginTop: "50px", marginBottom: "60px" }}>
                내 글 목록
              </Title>
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

          <div style={{ margin: "auto", marginTop: "100px" }}>
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

const mapDispatchToProps = (dispatch) => ({
  // ./_actions/user_action.js의 객체와 이름 동일. 함수를 통한 action 전달
  MypageUser: () => dispatch(actions.mypageAction()),
});

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

export default connect(mapDispatchToProps)(MyPage);