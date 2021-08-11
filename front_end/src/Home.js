import React from "react";
import styled, {keyframes} from "styled-components";
import background from "./home_background2.png";


const Home = (props) => {
    return (

        <Background>
            <Header>
                <HomeButton>#.</HomeButton>
                <MarginLeft/>
                <ContentButton>기초학습</ContentButton>
                <ContentButton>심화학습</ContentButton>
                <ContentButton>질문하기</ContentButton>
                <ContentButton>마이페이지</ContentButton>
                <RoundButton>로그인</RoundButton>
            </Header>

        </Background>
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
    height: 20px; 
`;

const RoundButton = styled.button`
    margin: 65px 50px 0px 15px;
    font-size: 17px;
    float: right;
    background-color: #3F3D56;
    border: 0;
    color: white;
    width: 110px;
    height: 40px;
    border-radius: 30px;
`;




export default Home;