import React from "react";
import styled from "styled-components";
import base from "./image/signin.png";
import character from "./image/signinCh.png";
import loginButton from "./image/loginButton.png";
import { Link } from "react-router-dom";

import HomeButton from "./components/HomeButton";

//Redux
//import Axios from "axios";
import { connect } from "react-redux";
import * as actions from "./_actions/user_action";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      userPasswd: "",
      userimg: "",
      loginState: "",
    };
    // 함수 이름 작성 시 명사+동사, 명사+명사+동사 이런식으로 형식 시키기!(시작 명사 제외하고는 중간 명사, 중간 동사 시작할 때 대문자 사용해야 한다.)
    this.serverConnect = this.serverConnect.bind(this);
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
      userPasswd: e.target.value,
    });
  };

  signinValueChange() {
    // 입력한 ID, Passwd server로 보내는 function.(post)
    const post = {
      id: this.state.userId,
      passwd: this.state.userPasswd,
    };

    fetch("http://localhost:5000/api/home/login", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    });
    this.serverConnect();
  }

  callApi = async () => {
    // serverConnect()에서 데이터 받아올 때 해당 URL로 불러와주는 function
    const response = await fetch("api/home/login");
    const body = await response.json();
    return body;
  };

  serverConnect() {
    // signinValueChange()로 보낸 이후 login 성공 여부를 변수로 받아오는 function (get)
    this.callApi()
      .then((res) => this.setState({ loginState: res.state })) // 받은 'state' 데이터를 loginState에 넣기.
      .then((res) => this.siginCheck()) // 만약 데이터를 받은 이후 다른 동작을 하기 위해 함수를 부름. 같은 함수 내로 작성하면 같이 동작해서 오류발생.
      .catch((err) => console.log(err));
  }

  siginCheck() {
    const id = this.state.userId;
    const passwd = this.state.userPasswd;
    const state = this.state.loginState;
    this.setState({
      // 변수의 값 바꿀 때는 setState 이용.
      userId: "",
      userPasswd: "",
      loginState: false,
    });

    if (this.state.loginState) {
      window.location.href = "/";
      alert("로그인이 완료되었습니다.");
    } else {
      window.location.href = "/signin";
      alert("아이디 혹은 비밀번호가 틀렸습니다. 다시 입력해주세요.");
    }
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
          <h4 style={{ textAlign: "right" }}>Welcome to #STORY</h4>
          <h1 style={{ fontSize: "40px", margin: "40px" }}>
            # STORY에 오신걸 환영합니다
          </h1>
          <h3 style={{ margin: "30px" }}>
            회원가입을 통해서 다양한 컨텐츠를 즐겨보세요!
          </h3>
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
              onClick={() => {
                this.signinValueChange();
              }}
            ></LoginButton>
          <Link
            to="/signup"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <h3 style={{ margin: "70px 0px" }}>계정이 없으신가요? 회원가입</h3>
          </Link>
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
  SigninUser: () => dispatch(actions.serverConnect()),
});

const BackGround = styled.div`
    background-position:center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    background-image: url(${base});
    resizeMode="stretch"
`;

const Image = styled.img`
  width: 504px;
  height: 720px;
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