import React from "react";
import styled from "styled-components";

//import Question from "./Question";

class MyWritinglist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.showWriting = this.showWriting.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  
  showWriting(e){
    console.log('click');
    console.log(this.props.title);
   }

   handleClickOpen() {
    this.setState({
      open: true,
    });
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div>
      <div onClick = {this.showWriting}>
        <Writing>
          <div>
            <text style={{ fontSize: "17px",fontWeight: "bold"}}>{this.props.title}</text>
          </div>
            <text style={{ position: "relative", top: "-30px", left: "480px"}}>
              작성일: {this.props.date}
            </text>
          <div style={{ width: "700px", marginLeft: "208px", marginTop: "-20px"}}>
            <text style={{ position: "relative", left: "-210px" }}>
              {this.props.question}
            </text>
          </div>
        </Writing>
      </div >
      <div open={this.state.open} onClose={this.handleClose}>
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
      </div>
      </div>
    );
  }
}

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

const Writing = styled.div`
  width: 700px;
  height: 100px;
  margin: 15px 0px;
  border-radius: 15px;
  text-align: left;
  cursor: pointer;
`;

export default MyWritinglist;