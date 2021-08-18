import React from "react";
import styled, {keyframes} from "styled-components";
import background from "./image/homeBg.svg";

import {Link} from "react-router-dom";

const DoQuestion = () => {

    return (
        <Background>
            <Modal>
                <Align>
                    <h1>질문하기</h1>
                    <Input></Input>
                    <Input style={{height: "365px"}}></Input>
                </Align>
            </Modal>
        </Background>
    );
}

const Background = styled.div`
    position: fixed;
    top:0; left: 0; bottom: 0; right: 0;
    background: rgba(0, 0, 0, 0.6);
`;


const Modal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 950px;
    height: 635px;
`;

const Align = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    item-align: center;
`;

const Input = styled.input`
    margin-top: 15px;
    text-align: left;
    padding-left: 30px;
    width: 800px;
    height: 60px;
    border-radius: 20px;
    border: 0;
    outline: none;
    background-color: #EAEAEA;
`;

export default DoQuestion;