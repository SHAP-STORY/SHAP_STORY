import React from "react";
import styled from "styled-components";
import signupBg from "./image/signupBg.svg";
import arrowIcon from "./image/arrowIcon.svg";
import { Link } from "react-router-dom";
import { post } from 'axios';

import { connect } from "react-redux";
import * as actions from "./_actions/user_action";

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            userPasswd: "",
            userGrade: "",
            userName: "",
            userPhonenumber: "",
            usingid: false, //중복된 아이디 true여야 로그인가능 
        };
        this.onChange = this.onChange.bind(this);
        this.checkID = this.checkID.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.signUpmember = this.signUpmember.bind(this);
    }


    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value	// input 태그에 연결돼 있는 친군데
        })			// 입력 시 이름에 맞는 state 값이 초기화 된다
    }

    checkID() {		// 데이터에 대해 서버와 얘기하고 결과를 알려준다 
        const data = {
            id: this.state.userId		// 현재 id state값을 data.id에 넣는다
        }

        fetch('http://localhost:5000/api/home/register', { // localhost 5000번 포트 register라우터를 찾는다
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),	// json화 해버리기
        })
            .then(res => res.json())
            .then(json => {
                if (json.tf === true) {		// json을 받아왔는데 .tf 값이 true면 사용가능
                    alert("사용가능한 ID입니다");  //알람
                    this.setState({
                        state: true,
                        nextLink: "./signUpComplete"
                    })
                }
                else {
                    alert("다른 ID를 입력해주세요");
                    this.setState({
                        state: false,
                        nextLink: "/"
                    })
                }
            });
        // return { // redux 전달을 위해서 사용.
        //     id: userId,
        //     state: state,
    }

    handleFormSubmit(e) {
        e.preventDefault()
        this.signUpmember()
            .then((response) => {
                console.log(response.data);//데이터 왔을 때 콘솔창에 보여줌.
            })
    }

    signUpmember() {
        const url = 'api/home/register';
        const formData = new FormData();
        formData.append('userId', this.state.userId);
        formData.append('userPasswd', this.state.userPasswd);
        formData.append('userGrade', this.state.usergrade);
        formData.append('userName', this.state.userName);
        formData.append('userPhonenumber', this.state.userPhonenumber);
        const config = {
            headers: {
                "content-type": "application/json",
            }
        }
        return post(url, formData, config);
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
                    <form onSubmit={this.handleFormSubmit}>
                        <text style={{ fontSize: "55px", textAlign: "left" }}>여러분을 환영합니다🎉</text>
                        <Input type='text' name='userName' value={this.state.userName} onChange={this.onChange} placeholder="이름을 입력하세요"></Input>
                        <Input type='text' name='userId' value={this.state.userId} onChange={this.onChange} placeholder="아이디를 입력해주세요"></Input>
                        <button onClick={this.checkID}>id 중복 확인</button>
                        <Input type='text' name='userPhonenumber' value={this.state.userPhonenumber} onChange={this.onChange} placeholder="휴대폰 번호를 입력해주세요"></Input>
                        <div style={{ display: "flex" }}>
                            <Input style={{ width: "395px" }} type='password' name='userPasswd' value={this.state.userPasswd} onChange={this.onChange} placeholder="비밀번호를 입력해주세요"></Input>
                            <BelongSelect aria-label="소속">
                                <Option selected value="소속">소속을 선택해주세요</Option>
                                <option name='userGrade' value={this.state.usergrade} onChange={this.onChange}>선생님</option>
                                <option name='userGrade' value={this.state.usergrade} onChange={this.onChange}>초등학생</option>
                                <option name='userGrade' value={this.state.usergrade} onChange={this.onChange}>중학생</option>
                                <option name='userGrade' value={this.state.usergrade} onChange={this.onChange}>고등학생</option>
                            </BelongSelect>
                        </div>
                        <Link to="this.state.nextLink">
                            <SignUpButton>회원가입</SignUpButton>
                        </Link>
                    </form>
                </SignUpContent>
            </Background >
        );
    }

}

const mapStateToProps = (state) => ({ // ./_reducers/user_reducer.js 의 변수와 이름 동일. state 변수 전달.
    storeId: state.userId,
    storeRegisterstate: state.registerSuccess
});

const mapDispatchToProps = (dispatch) => ({ // ./_actions/user_action.js의 객체와 이름 동일. 함수를 통한 action 전달
    SignUpUser: () => dispatch(actions.signUpUser()),
});

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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);