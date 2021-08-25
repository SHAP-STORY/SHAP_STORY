import React from "react";
import styled from "styled-components";
import levelUpImg from "./image/level_up_image.png"
import divider from "./image/divider.png"


const LevelUp = (props) => {
    return (
        <RowAlign>
            <ColAlign>
                <img style={{width: "150px", margin: "40% 0 13% 0"}} src={levelUpImg}></img>
                <h3 style={{marginBottom: "5%"}}>목차</h3>
                <img style={{marginBottom: "5%"}} src={divider}></img>
                <ContentButton>🤍 1차시</ContentButton>
                <ContentButton>🤍 2차시</ContentButton>
                <ContentButton style={{marginBottom: "20%"}}>🤍 3차시</ContentButton>

                <h3 style={{marginBottom: "5%"}}>소통하기</h3>
                <img style={{marginBottom: "5%"}} src={divider}></img>
                <ContentButton>🙋‍♀ 질문하기</ContentButton>
            </ColAlign>

        </RowAlign>
    )
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
    width: 13%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    align: left;
    box-shadow: 10px 10px 10px #dadbdb;
`;

export default LevelUp;