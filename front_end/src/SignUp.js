import {React, useState} from "react";
import styled from "styled-components";
import signupBg from "./image/signupBg.svg";
import arrowIcon from "./image/arrowIcon.svg";
import {Link} from "react-router-dom";

const SignUp = (props) => {
    const [selected, setSelected] = useState("");

    const options = [
        { value: '선생님', label: '선생님'},
        { value: '초등학생', label: '초등학생'},
        { value: '중학생', label: '중학생'},
        { value: '고등학생', label: '고등학생'}
    ]

    return (
        <Background>
            <Header>
                <Link to={"/"}>
                    <HomeButton>#.</HomeButton>
                </Link>
            </Header>
            <SignUpContent>
                <text style={{fontSize: "55px", textAlign: "left"}}>여러분을 환영합니다🎉</text>
                <Input placeholder="이름을 입력하세요"></Input>
                <Input placeholder="휴대폰 번호를 입력해주세요"></Input>
                <Input placeholder="아이디를 입력해주세요"></Input>
                <div style={{display:"flex"}}>
                    <Input style={{width: "395px"}} placeholder="비밀번호를 입력해주세요"></Input>
                    <BelongSelect aria-label="소속">
                        <Option selected value="소속">소속을 선택해주세요</Option>
                        <option>선생님</option>
                        <option>초등학생</option>
                        <option>중학생</option>
                        <option>고등학생</option>
                    </BelongSelect>
                </div>
                <Link to="./signUpComplete">
                    <SignUpButton>회원가입</SignUpButton>
                </Link>
            </SignUpContent>
        </Background>
    );
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