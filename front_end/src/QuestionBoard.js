import React from "react";
import styled, {keyframes} from "styled-components";
import {Link} from "react-router-dom";
import profile from "./image/profile.png"
import background from "./image/questionBg.svg";

import HomeButton from "./components/HomeButton";
import TopBar from "./components/TopBar";

const Questions = (props) => {
    return (
        <Background>
            <Header>
                <Link to={"/"}>
                    <HomeButton>#.</HomeButton>
                </Link>
                <MarginLeft/>
                <TopBar> </TopBar>
                <RoundButton>로그인</RoundButton>
            </Header>

            <QuestionBar>
                <Search></Search>
                <SearchButton>검색</SearchButton>
            </QuestionBar>

            <QuestionDiv>
                <ContentDiv>
                    <ProfileImg src={profile}></ProfileImg>
                    <Title_Author>
                        <h4 style={{margin: "0"}}>Basic 3강에서 질문있습니다! 자꾸 에러가 나요</h4>
                        <text style={{fontSize: "80%", marginTop: "10px"}}>방희연</text>
                    </Title_Author>
                    <text style={{fontSize: "80%", fontWeight: "bold"}}>작성일: 2021.07.24 오전 11:30</text>
                </ContentDiv>
                <ContentDiv>
                    <ProfileImg src={profile}></ProfileImg>
                    <Title_Author>
                        <h4 style={{margin: "0"}}>Basic 3강에서 질문있습니다! 자꾸 에러가 나요</h4>
                        <text style={{fontSize: "80%", marginTop: "10px"}}>방희연</text>
                    </Title_Author>
                    <text style={{fontSize: "80%", fontWeight: "bold"}}>작성일: 2021.07.24 오전 11:30</text>
                </ContentDiv>
                <ContentDiv>
                    <ProfileImg src={profile}></ProfileImg>
                    <Title_Author>
                        <h4 style={{margin: "0"}}>Basic 3강에서 질문있습니다! 자꾸 에러가 나요</h4>
                        <text style={{fontSize: "80%", marginTop: "10px"}}>방희연</text>
                    </Title_Author>
                    <text style={{fontSize: "80%", fontWeight: "bold"}}>작성일: 2021.07.24 오전 11:30</text>
                </ContentDiv>
                <ContentDiv>
                    <ProfileImg src={profile}></ProfileImg>
                    <Title_Author>
                        <h4 style={{margin: "0"}}>Basic 3강에서 질문있습니다! 자꾸 에러가 나요</h4>
                        <text style={{fontSize: "80%", marginTop: "10px"}}>방희연</text>
                    </Title_Author>
                    <text style={{fontSize: "80%", fontWeight: "bold"}}>작성일: 2021.07.24 오전 11:30</text>
                </ContentDiv>
                <Link to="./doQuestion">
                    <SearchButton style={{width: "150px", marginTop: "10px"}}>질문하기</SearchButton>
                </Link>
            </QuestionDiv>

            <BottomDiv>
                <PageDiv>
                    <PageButton>◀</PageButton>
                    <PageButton>1</PageButton>
                    <PageButton>2</PageButton>
                    <PageButton>3</PageButton>
                    <PageButton>4</PageButton>
                    <PageButton>5</PageButton>
                    <PageButton>▶</PageButton>
                </PageDiv>
            </BottomDiv>
        </Background>
    );
}

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

//---------------------------------------------------------------------
// QuestionBar

const QuestionBar = styled.div`
    position: absolute;
    top: 150px;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 800px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const Search = styled.input`
    width: 640px;
    height: 42px;
    border-radius: 35px;
    border: 3px solid #3F3D56;
    text-align: center;
    &: focus{
            outline: none;
            border: 3px solid #dadbdb;
        }
`

const SearchButton = styled.button`
    margin-left: 30px;
    font-size: 17px;
    font-weight: 550;
    float: right;
    background-color: #3F3D56;
    border: 0;
    color: white;
    width: 110px;
    height: 48px;
    border-radius: 30px;
    &: hover{
        background-color: #dadbdb;
        color: black;
    }
`;

// -------------------------------------------------------------------
// QuestionDiv

// search bar 아래 질문, 질문하기 버튼을 포함하는 div
const QuestionDiv = styled.div`
    position: absolute;
    width: 800px;
    top: 230px;
    left: 50%;
    transform: translate(-50%, 0%);
`;

// 프로필 사진, 제목, 작성자, 작성일 수평정렬을 div : ContentDiv 1개가 질문 1개 
const ContentDiv = styled.div`
    margin: 20px 0px 20px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

// 질문 제목, 작성자 수직정렬을 위한 div
const Title_Author = styled.div`
    width: 60%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-left: 20px;
    text-align: left;
    align: left;
`;

// profile 이미지 둥글게 만들어줌
const ProfileImg = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 30px;
`

// -------------------------------------------------------------------
// BottomDiv - 12345 페이지 넘기기

const BottomDiv = styled.div`
    position: absolute;
    width: 800px;
    top: 650px;
    left: 50%;
    transform: translate(-50%, 0%);
`;

const PageDiv = styled.div`
    margin: 0px 10px 0px 10px;
    display: flex;
    justify-content: center;
    flex-direction: row;
`;

const PageButton = styled.button`
    font-size: 17px;
    background-color: #00ff0000;
    border:0;
    border-radius: 20px;
    height: 35px; 
    
    &:hover {
    background: #dadbdb;
    }
`;


export default Questions;