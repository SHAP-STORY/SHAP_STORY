import React from "react";
import styled, { keyframes } from "styled-components";
import background from "./image/homeBg.svg";
import user_info from "./variables/user_info";
import { Link } from "react-router-dom";

class DoQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            student_id: user_info[1],
        };
        this.goBack = this.goBack.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    goBack = () => { //전 페이지로 다시 감.
        window.history.back();
    };

    onSubmit(e) {
        // e.preventDefault();
        const data = {
            student_id: this.state.student_id,
            title: this.state.title,
            content: this.state.content,
        };

        let length = this.state.content;

        if (this.state.title === "" || this.state.content === "") {
            alert("제목이나 내용을 입력해 주세요");
            this.props.history.push("/doQuestion");
        } else if (length.length >= 200) {
            alert("200자를 초과 했어요");
            this.props.history.push("/doQuestion");
        } else {
            fetch("http://localhost:5000/api/posts/create", {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data), // json화 해버리기
            });
            alert("제출 되었습니다 감사합니다");
            this.props.history.push("/questions");
        }
    };

    render() {
        return (
            <Background>
                <Modal>
                    <AlignCol>
                        <Title>질문하기</Title>
                        <ButtonOut onClick={this.goBack}>X</ButtonOut>
                        <Input name="title" value={this.state.title} onChange={this.onChange} placeholder="제목을 입력해주세요" />
                        <Input name="content" value={this.state.content} onChange={this.onChange} placeholder="질문을 작성해주세요" style={{ height: "330px" }} />
                        <SaveButton onClick={this.onSubmit}>저장</SaveButton>
                    </AlignCol>
                </Modal>
            </Background>
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
        background-color: #EAEAEA;
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
        font-weight: 550;
        background-color: #EAEAEA;
        color: black;
    }
`;

export default DoQuestion;