import React from "react";
import styled from "styled-components";
import basicImg from "./image/basic_image.png"
import divider from "./image/divider.png"

import ExitButton from "./components/ExitButton";

class Basic extends React.Component {

    render(){
    return (
        <RowAlign>
            <ColAlign>
                <img style={{width: "80px", margin: "40% 0 20% 0"}} src={basicImg}></img>
                <h3 style={{marginBottom: "5%"}}>목차</h3>
                <img style={{marginBottom: "5%"}} src={divider}></img>
                <ContentButton>🤍 1차시</ContentButton>
                <ContentButton>🤍 2차시</ContentButton>
                <ContentButton style={{marginBottom: "20%"}}>🤍 3차시</ContentButton>
                <h3 style={{marginBottom: "5%"}}>소통하기</h3>
                <img style={{marginBottom: "5%"}} src={divider}></img>
                <ContentButton>🙋‍♀ 질문하기</ContentButton>
                <ExitButton/>
            </ColAlign>
            <div>
            <iframe src="../content/개미와배짱이.html" width="100%" height="768px"></iframe>
            </div>
        </RowAlign>
    )
    }
}

const ContentButton = styled.button`
    font-size: 15px;
    background-color: #00ff0000;
    border: 0;
    padding: 5px 10px 10px 10px;
    border-radius: 20px;
    height: 35px;
`;

const RowAlign = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    border-radius: 20px;
`

const ColAlign = styled.div`
    width: 15%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    align: left;
    box-shadow: 10px 10px 10px #dadbdb;
`;

export default Basic;