  
import React from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import styled from "styled-components";
import user_info from "../variables/user_info";
import { withRouter } from 'react-router-dom'

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userimg: user_info[3],
      userName: user_info[2],
      loginState: user_info[0],
    };
    this.basicLessonLink = this.basicLessonLink.bind(this);
    this.hardLessonLink = this.hardLessonLink.bind(this);
    this.questionLink = this.questionLink.bind(this);
    this.mypageLink = this.mypageLink.bind(this);
    this.handlePage = this.handlePage.bind(this);
  }

  basicLessonLink() {
    if (this.state.loginState === false) {
      alert("로그인이 필요한 서비스입니다.");
    }
  }
  hardLessonLink() {
    if (this.state.loginState === false) {
      alert("로그인이 필요한 서비스입니다.");
    }
  }
  questionLink() {
    if (this.state.loginState === false) {
      alert("로그인이 필요한 서비스입니다.");
    }
  }

  mypageLink() {
    if (this.state.loginState === false) {
      alert("로그인이 필요한 서비스입니다.");
    }
  }
  
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleLogout() {
    console.log('in');
    user_info[0] = false;
    user_info[1] = '';
    user_info[2] = '';
    user_info[3] = '';
  }

  handlePage() {
    if (this.state.loginState === false) {
      return (
        <Link to="./signin">
          <RoundButton>로그인</RoundButton>
        </Link>
      );
    } else {
      return (
        <UserInfo>
          <img
            src={this.props.userImg}
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "30px",
              margin: "auto 10px",
            }}
          />
          <div style={{ lineHeight: "40px" }}>{this.state.userName} 님</div>
          <DropdownButton
            id="dropdown-basic-button"
            title='Click'
            variant="light"
            style={{ marginLeft: "40px" }}
          >
            <Dropdown.Item onSelect={(eventKey) => console.log(eventKey)} eventKey="user">회원정보</Dropdown.Item>
            <Dropdown.Item onSelect={ () => {
              alert("로그아웃을 시도 하시겠습니까?") ;
              this.setState({loginState: false});
              this.handleLogout();
              window.location.href = '/';
            }} eventKey="logout">
              로그아웃
            </Dropdown.Item>
          </DropdownButton>
        </UserInfo>
      );
    }
  }

  render() {
    return (
      <div>
        <Link to={this.state.loginState ? "./basic" : "/"}>
          <ContentButton onClick={this.basicLessonLink}>기초학습</ContentButton>
        </Link>
        <Link to={this.state.loginState ? "./advanced" : "/"}>
          <ContentButton onClick={this.hardLessonLink}>심화학습</ContentButton>
        </Link>
        <Link to={this.state.loginState ? "./questions" : "/"}>
          <ContentButton onClick={this.questionLink}>질문하기</ContentButton>
        </Link>
        <Link to={this.state.loginState ? "./mypage" : "/"}>
          <ContentButton onClick={this.mypageLink}>마이페이지</ContentButton>
        </Link>
        {this.handlePage()}
      </div>
    );
  }
}
const ContentButton = styled.button`
  margin: 60px 30px 0px 0px;
  font-size: 17px;
  float: left;
  background-color: #00ff0000;
  border: 0;
  padding: 5px 10px 10px 10px;
  border-radius: 20px;
  height: 35px;
  &:hover {
    background: #dadbdb;
  }
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

const UserInfo = styled.div`
  margin: 60px 50px 0px 15px;
  font-size: 17px;
  float: right;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export default withRouter(TopBar);