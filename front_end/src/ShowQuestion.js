import React from "react";
import styled, { keyframes, ThemeConsumer } from "styled-components";
import background from "./image/homeBg.svg";
import user_info from "./variables/user_info";
import { Link } from "react-router-dom";
import axios from "axios";


class showQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            student_id: "",
            index: ""
        };
    }
    onClick(e) {
        // e.preventDefault();
        fetch("http://localhost:5000/api/posts/read/:index", {
            method: "get",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(), // json화 해버리기
        })
            .then(response => response.json())

    }

    render() {
        return (
            <Background>
                <Modal>
                    <AlignCol>
                        <Title>질문</Title>
                        <Link to='/questions'>
                            <ButtonOut>X</ButtonOut>
                        </Link>
                        <ul>
                            <div>작성자 : </div><br></br>
                            <div>제목 : </div><br></br>
                            <div>내용 : </div>
                        </ul>

                    </AlignCol>
                </Modal >
            </Background >
        );

    }
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

const AlignCol = styled.div`
                display: flex;
                flex-direction: column;
                justify-content: center;
                item-align: center;
                `;

const Title = styled.h1`
                margin-top: 0;
                position: absolute;
                top: 7%;
                left: 50%;
                transform: translate(-50%, 0%);
                `;

const ButtonOut = styled.button`
                margin-top: 0;
                position: absolute;
                top: 7%;
                left: 90%;
                font-weight: bold;
                font-size: 30px;
                background-color: #00ff0000;
                border-radius: 15px;
                border: 0;

                &: hover{
                    background - color: #EAEAEA;
                color: black;
    }
                `;

const Input = styled.input`
                font-size: 17px;
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

const SaveButton = styled.button`
                position: absolute;
                top: 85%;
                left: 50%;
                transform: translate(-50%, 0);

                margin-top: 20px;
                font-size: 17px;
                font-weight: 550;
                background-color: #3F3D56;
                border: 0;
                color: white;
                width: 110px;
                height: 48px;
                border-radius: 30px;
                &: hover{
                    font - weight: 550;
                background-color: #EAEAEA;
                color: black;
    }
                `;

export default showQuestion;