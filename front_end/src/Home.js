import React from "react";
import styled, { keyframes } from "styled-components";
import background from "./image/homeBg.svg";
import { Link } from "react-router-dom";

import HomeButton from "./components/HomeButton";
import TopBar from "./components/TopBar";

//Redux
import { connect } from "react-redux";
import * as actions from "./_actions/start_action";

const Home = (props) => {
    return (
        <Background>
            <Header>
                <Link to={"/"}>
                    <HomeButton>#.</HomeButton>
                </Link>
                <MarginLeft/>
                <TopBar></TopBar>   
            </Header>
            <Body>
                <Title>Hello, #STORY</Title>
                <Text>마이크로비트를 이용한<br />코딩교육 웹사이트<br />쉽고 재미있게 코딩을 배워보아요 😍</Text>
                <RoundButton2>학습하기</RoundButton2>
            </Body>

            <BackBar>
                <Our><b>#SHAP-STORY™ 방희연 서현주 이채영 김효민</b></Our>
            </BackBar>
        </Background>
    );
}
const mapDispatchToProps = (dispatch) => ({
    // ./_actions/user_action.js의 객체와 이름 동일. 함수를 통한 action 전달
    HomeUser: () => dispatch(actions.homeAction()),
  });

const Background = styled.div`
    background-position:center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    background-image: url(${background});
    resizeMode="stretch"
`;

const Header = styled.div`    
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center; 
`;

const MarginLeft = styled.div`
    margin-left: auto;
`;

//--------------------------------------------------------
// BODY

const SlideIn = keyframes`
  from {
    margin-left: 70%;
  }

  to {
    margin-left: 35vh;
  }
`;

const Body = styled.div`
    float: left;
    margin: 20vh 0px 0px 35vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation : ${SlideIn} 5s 1s
`;

const Title = styled.h1`
    font-size: 40px;
    text-align: left;
    align: left;
`;

const Text = styled.text`
    text-align: left;
    align: left;
    font-size: 20px;
`;

const RoundButton2 = styled.button`
    font-size: 20px;
    margin-top: 50px;
    float: right;
    background-color: #3F3D56;
    border: 0;
    color: white;
    width: 130px;
    height: 45px;
    border-radius: 30px;
`;

//-----------------------------------------------------

const move = keyframes`
    0%{
        left: 10%;
    }
    50% {
        left 70%
    }
    100%{
        left: 10%;
    }
`;

const BackBar = styled.div`
    position:absolute;
    bottom:0;
    background: #5FDBB2;
    width: 100%;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Our = styled.div`
    color: white;
    position:absolute;
    bottom:0;
    font-size : 17px;
    animation : ${move} 10s 1s infinite;
`;

export default connect(mapDispatchToProps)(Home);