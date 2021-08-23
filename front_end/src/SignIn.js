import React from "react";
import styled from "styled-components";
import base from "./image/signin.png";
import character from "./image/signinCh.png";
import loginButton from "./image/loginButton.png";
import { Link } from "react-router-dom";

import HomeButton from './components/HomeButton'
/* CHECK  
- # 위치 맞추기 (0: HOME, SIGNIN, QuestionBoard/ X: )
*/

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            userpasswd: ''
        }
    }

    render(){
        return (
            <BackGround>
                <Link to={"/"}>
                    <HomeButton>#.</HomeButton>
                </Link>
                <Image src={character}></Image>
                <LoginContent>
                    <h4 style={{textAlign: "right"}}>Welcome to #STORY</h4>
                    <h1 style={{fontSize: "40px", margin: "40px"}}># STORY에 오신걸 환영합니다</h1>
                    <h3 style={{margin: "30px"}}>회원가입을 통해서 다양한 컨텐츠를 즐겨보세요!</h3>
                    <Input placeholder="아이디를 입력해주세요"></Input>
                    <Input placeholder="비밀번호를 입력해주세요"></Input>
                    <Link to={"/"}>
                        <LoginButton></LoginButton>
                    </Link>
                    <Link to="/signup" style={{color:"inherit", textDecoration: "none"}}>
                        <h3 style={{margin: "70px 0px"}}>계정이 없으신가요? 회원가입</h3>
                    </Link>
                </LoginContent>
            </BackGround>
        );
    }
}

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
    top: 20px; left: 150px;
`;

const LoginContent = styled.div`
    position: absolute;
    top: 100px; left: 750px;
    background: white;
    color: #707070;
`;

const Input = styled.input`
    width: 447px;
    height: 80px;
    display: block;
    padding: 5px 30px 5px 10px;
    border: solid 1px #dadada;
    border-left: solid 0.5rem #1C19D3;
    background: #fff;
    box-sizing: border-box;
    font-size: 16px;
    margin: 0 90px;
    &: focus{
        outline: none;
    }
`;

const LoginButton = styled.button`
    background-image: url(${loginButton});
    border:none;
    background-color: white;
    width: 100px;
    height: 29px;
    position: relative;
    left: 170px; top: 20px;
    cursor: pointer;
`;
export default SignIn;