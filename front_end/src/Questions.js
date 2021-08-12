import React from "react";
import styled, {keyframes} from "styled-components";
import {Link} from "react-router-dom";
import background from "./image/home_background2.png";

const Questions = (props) => {
    return (
        <div>
            <Header>
                <Link to={"/"}>
                    <HomeButton>#.</HomeButton>
                </Link>
                <MarginLeft/>
                <ContentButton>기초학습</ContentButton>
                <ContentButton>심화학습</ContentButton>
                <Link to="./questions">
                    <ContentButton>질문하기</ContentButton>
                </Link>
                <ContentButton>마이페이지</ContentButton>
                <RoundButton>로그인</RoundButton>
            </Header>
        </div>
    );
}

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${background});
    resizeMode="stretch"
`;

const Header = styled.div`    
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center; 
`;

const MarginLeft = styled.div`
    margin-left: auto;
`;

const HomeButton = styled.button`
    margin: 60px 0px 0px 30px;
    background-color: #54B192;
    border: 0;
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    text-align: center;
    font-size: 35px;
`;


const ContentButton = styled.button`
    margin: 60px 30px 0px 0px;
    font-size: 17px;
    float: right;
    background-color: #00ff0000;
    border:0;
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
    background-color: #3F3D56;
    border: 0;
    color: white;
    width: 110px;
    height: 40px;
    border-radius: 30px;
`;

export default Questions;