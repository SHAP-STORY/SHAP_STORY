import React from "react";
import styled from "styled-components";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exitState: false,
    };
    this.handlePage = this.handlePage.bind(this);
  }

  handlePage() {
    this.props.history.push("/");
  }

  render() {
    return (
        <Modal>
        <AlignCol>
            <Title>질문하기</Title>
            <ButtonOut
            >X</ButtonOut>
            <Input placeholder="제목을 입력해주세요"/>
            <Input placeholder="질문을 작성해주세요" style={{height: "330px"}}/>
            <SaveButton onClick={this.handleClose}
            >저장</SaveButton>
        </AlignCol>
    </Modal>
    );
  }
}

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

export default Question;
