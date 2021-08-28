import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import profile from "./image/profile.png"
import background from "./image/questionBg.svg";
import axios from "axios";

import HomeButton from "./components/HomeButton";
import TopBar from "./components/TopBar";
import Boardlist from "./components/Boardlist";
import question_info from "./variables/user_info";
class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boards: [],
            index: question_info[0],
        };
    }

    //로딩 데이터 
    loadingData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/posts');
            this.setState({ // boards: 'test' 
                boards: response.data,
            });
        } catch (e) {
            console.log(e);
        }
    };
    // showQuestion() {
    componentDidMount() {
        const { loadingData } = this;
        loadingData();
    }


    render() {
        return (
            <Background>
                <Header>
                    <Link to={"/"}>
                        <HomeButton>#.</HomeButton>
                    </Link>
                    <MarginLeft />
                    <TopBar> </TopBar>
                </Header>

                <QuestionBar>
                    <Search></Search>
                    <SearchButton>검색</SearchButton>
                </QuestionBar>

                <QuestionDiv>
                    {this.state.boards.map((board) => { //.map삭제
                        return (
                            <Boardlist
                                index={board.index}
                                title={board.title}
                                student_id={board.student_id}
                                body={board.body}
                                date={board.date}
                            />
                        );
                    })}
                </QuestionDiv >

                <SideDiv>
                    <PageDiv>
                        <Link to="./doQuestion">
                            <ContentButton style={{ width: "150px", marginTop: "10px" }}>질문하기</ContentButton >
                        </Link>
                    </PageDiv>
                </SideDiv>


            </Background >
        );
    }
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
    margin: 0px 0px 0px 0px;
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
    top: 210px;
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

const SideDiv = styled.div`
    position: absolute;
    width: 110px;
    top: 137px;
    margin-left: 1200px;
    transform: translate(0%, 0%);
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