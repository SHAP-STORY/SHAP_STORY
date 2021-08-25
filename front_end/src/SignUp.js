import React from "react";
import styled from "styled-components";
import signupBg from "./image/signupBg.svg";
import arrowIcon from "./image/arrowIcon.svg";
import { Link } from "react-router-dom";
import { post } from 'axios';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            userPasswd: "",
            userGrade: "",
            userName: "",
            userPhonenumber: "",
        };
        this.signUpValueChange = this.signUpValueChange.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    signUpValueChange() {
        // 입력한 ID, Passwd server로 보내는 function.(post)
        const post = {
            userId: this.state.userId,
            userPasswd: this.state.userPasswd,
            userGrade: this.state.userGrade,
            userName: this.state.userName,
            userPhonenumber: this.state.userPhonenumber,
        };

        fetch("http://localhost:5000/api/home/register", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(post),
        })
    }

    onChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render() {
        return (
            <Background>
                <Header>
                    <Link to={"/"}>
                        <HomeButton>#.</HomeButton>
                    </Link>
                </Header>
                <SignUpContent>
                    <text style={{ fontSize: "55px", textAlign: "left" }}>여러분을 환영합니다🎉</text>
                    <Input type='text' name='userName' value={this.state.userName} onChange={this.onChange} placeholder="이름을 입력하세요"></Input>
                    <Input type='text' name='userId' value={this.state.userId} onChange={this.onChange} placeholder="아이디를 입력해주세요"></Input>
                    {/* <button onClick={this.checkID}>id 중복 확인</button> */}
                    <Input type='text' name='userPhonenumber' value={this.state.userPhonenumber} onChange={this.onChange} placeholder="휴대폰 번호를 입력해주세요"></Input>
                    <div style={{ display: "flex" }}>
                        <Input style={{ width: "395px" }} type='password' name='userPasswd' value={this.state.userPasswd} onChange={this.onChange} placeholder="비밀번호를 입력해주세요"></Input>
                        <BelongSelect name='userGrade' value={this.state.userGrade} onChange={this.onChange} aria-label="소속">
                            <Option>학년을 선택해주세요(초등학교) </Option>
                            <option value="1">1학년</option>
                            <option value="2">2학년</option>
                            <option value="3">3학년</option>
                            <option value="4">4학년</option>
                            <option value="5">5학년</option>
                            <option value="6">6학년</option>
                        </BelongSelect>
                    </div>
                    <Link to="/signUpComplete">
                        <SignUpButton onClick={this.signUpValueChange}> SUBMIT </SignUpButton>
                    </Link>
                </SignUpContent>
            </Background >
        );
    }
}

const Background = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-image: url(${signupBg});
`;

const Header = styled.div`
    height: 120px;
    width: 100%;
    display: flex;
    /*border-bottom: solid;*/
`;

const HomeButton = styled.button`
    margin: 60px 0px 0px 30px;
    background-color: #54B192;
    border: 0;
    color: #3F3D56;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    font-size: 35px;
    cursor: pointer;
    position: absolute;
    top: -25px; left: 30px;
    text-align: center;
`;

//------------------------------
//회원가입 항목 섹션

const SignUpContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 25px 90px;
    width: 900px;
`;

const Input = styled.input`
    width: 800px;
    height: 72px;
    background: #EAEAEA;
    border-radius: 10px;
    border: none;
    margin: 10px 0;
    font-size: 20px;
    font-weight: bold;
    color: #6E6E6E;
    display: flex;
    padding: 0 0 0 10px;
    &: focus{
        outline:none;
    }
`;

const BelongSelect = styled.select`
    width: 400px; 
    height: 72px;
    border: none;
    background-color: #EAEAEA;
    font-size: 20px;
    font-weight: bold;
    color: #6E6E6E;
    border-radius: 10px;
    margin: 10px 5px;
    &: focus{
        outline:none;
    }
`;

const Option = styled.option`
    border-radius: 10px;
    width: 50%;
`;

const SignUpButton = styled.button`
    width: 405px;
    height: 72px;
    border: none;
    border-radius: 10px;
    background: #EB6282;
    color: white;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
    position: fixed;
    top: 595px; left: 90px;
`;

export default SignUp;