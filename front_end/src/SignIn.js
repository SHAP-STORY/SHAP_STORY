import React from "react";
import styled from "styled-components";
import base from "./image/signin.png";
import character from "./image/signinCh.png";
import loginButton from "./image/loginButton.png";
import { Link } from "react-router-dom";

import HomeButton from "./components/HomeButton";
import user_info from "./variables/user_info";

//Redux
import { connect } from "react-redux";
import * as actions from "./_actions/user_action";

// NOTE test 해보려면 id:test, passwd: test로 가능!
// user_info -> name 이름 받기

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      userPasswd: "",
      userimg: "",
      userName: "",
      loginState: "",
    };
    // 함수 이름 작성 시 명사+동사, 명사+명사+동사 이런식으로 형식 시키기!(시작 명사 제외하고는 중간 명사, 중간 동사 시작할 때 대문자 사용해야 한다.)
    this.signinValueChange = this.signinValueChange.bind(this);
    this.siginCheck = this.siginCheck.bind(this);
  }

  idChange = (e) => {
    // 입력한 id 값을 userId에 저장.
    this.setState({
      userId: e.target.value,
    });
  };

  passwdChange = (e) => {
    this.setState({
      // 변수의 값 바꿀 때는 setState 이용.
      userPasswd: e.target.value,
    });
  };

  signinValueChange(e) {
    e.preventDefault();
    // 입력한 ID, Passwd server로 보내는 function.(post)
    const post = {
      id: this.state.userId,
      passwd: this.state.userPasswd,
    };

    fetch("/api/home/login", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
    .then(res => res.json())
    .then(json => {
      console.log(json);
      this.setState({ loginState: json.loginstate });
      if (this.state.loginState === true) {
        user_info[0] = true;
        user_info[1] = this.state.userId;
        user_info[2] = json.name;
        user_info[3] = json.img;
        console.log(user_info);
        alert("로그인이 성공적으로 완료되었습니다.");
        this.props.history.push("/");
      } else {
        alert("아이디 혹은 비밀번호가 틀렸습니다. 다시 입력해주세요.");
        this.props.history.push("/signin");
      }
      this.siginCheck();
    })
  }

  siginCheck() {
    const id = this.state.userId;
    const passwd = this.state.userPasswd;
    const state = this.state.loginState;
    return {
      // redux 전달을 위해서 사용.
      id: id,
      passwd: passwd,
      state: state,
    };
  }

  render() {
    return (
      <BackGround>
        <Link to={"/"}>
          <HomeButton>#.</HomeButton>
        </Link>
        <Image src={character}></Image>
        <LoginContent>
          <div style={{display: "flex", flexDirection: "column"}}>
            <text style={{ fontSize: "13px", textAlign: "right" }}>Welcome to #STORY</text>
            <text style={{ fontSize: "40px", fontWeight: "bold", marginTop: "30px" }}>
              # STORY에 오신걸 환영합니다
            </text>
            <text style={{ marginTop: "20px", marginBottom: "35px" }}>
              회원가입을 통해서 다양한 컨텐츠를 즐겨보세요!
            </text>
          </div>
          <Input
            placeholder="아이디를 입력해주세요"
            id="userId"
            onChange={this.idChange}
          ></Input>
          <Input
            placeholder="비밀번호를 입력해주세요"
            id="userPasswd"
            type="password"
            onChange={this.passwdChange}
          ></Input>
          <LoginButton
            onClick={this.signinValueChange}></LoginButton>
          <div style={{margin: "50px 0"}}>
            <Link
              to="/signup"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <text style={{ fontsize: "10px" }}>계정이 없으신가요? 회원가입</text>
            </Link>
          </div>
        </LoginContent>
      </BackGround>
    );
  }
}
const mapStateToProps = (state) => ({
  // ./_reducers/user_reducer.js 의 변수와 이름 동일. state 변수 전달.
  storeId: state.userid,
  storePasswd: state.userpasswd,
  storeLoginstate: state.loginSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  // ./_actions/user_action.js의 객체와 이름 동일. 함수를 통한 action 전달
  SigninUser: () => dispatch(actions.signinAction()),
});

const BackGround = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100%;
    background-size: cover;
    width: 100%;
    height: 100%;
    background-image: url(${base});
`;

const Image = styled.img`
  width: 504px;
  height: 700px;
  position: absolute;
  top: 20px;
  left: 150px;
`;

const LoginContent = styled.div`
  position: absolute;
  top: 100px;
  left: 750px;
  background: white;
  color: #707070;
`;

const Input = styled.input`
  width: 447px;
  height: 80px;
  display: block;
  padding: 5px 30px 5px 10px;
  border: solid 1px #dadada;
  border-left: solid 0.5rem #1c19d3;
  background: #fff;
  box-sizing: border-box;
  font-size: 16px;
  margin: 0 90px;
  &: focus {
    outline: none;
  }
`;

const LoginButton = styled.button`
  background-image: url(${loginButton});
  border: none;
  background-color: white;
  width: 100px;
  height: 29px;
  position: relative;
  left: 170px;
  top: 20px;
  cursor: pointer;
`;

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);