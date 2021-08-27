import React from "react";
import styled from "styled-components";
//import Question from "./Question";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

class MyWritinglist extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      open: false
    }
    this.showWriting = this.showWriting.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  showWriting() {
    console.log("click");
    this.setState({
      open: true
    })
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
        <div>
          <Writing onClick = {this.showWriting}>
            <div>
              <text style={{ fontSize: "17px", fontWeight: "bold" }}>
                {this.props.title}
              </text>
            </div>
            <text style={{ position: "relative", top: "-30px", left: "480px" }}>
              작성일: {this.props.date}
            </text>
            <div
              style={{
                width: "700px",
                marginLeft: "208px",
                marginTop: "-20px",
              }}
            >
              <text style={{ position: "relative", left: "-210px" }}>
                {this.props.question.slice(0,20)+" ..."}
              </text>
            </div>
          </Writing>
        </div>
        <div>
        
            <Dialog
            open={this.state.open}
            onClosed={this.handleClose}>
              <Modaldata>
              <AlignCol >
                <ButtonOut onClick={this.handleClose} >X</ButtonOut>
                <ModelTitle
                > {this.props.title}</ModelTitle>
                <ModelText
                  style={{ height: "330px" }}
                >{this.props.question}
                </ModelText>
              </AlignCol>
              </Modaldata>
            </Dialog>
        </div>
      </div>
    );
  }
}

const Modaldata = styled.div`
position: fixed;
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

  &: hover {
    background-color: #eaeaea;
    color: black;
  }
`;

const ModelTitle = styled.h2`
  font-size: 20px;
  margin-top: 15px;
  text-align: left;
  padding-top: 15px;
  padding-left: 30px;
  width: 800px;
  height: 60px;
  border-radius: 20px;
  border: 0;
  outline: none;
  background-color: #eaeaea;
`;

const ModelText = styled.p`
  font-size: 17px;
  margin-top: 15px;
  text-align: left;
  padding-top: 15px;
  padding-left: 30px;
  width: 800px;
  height: 60px;
  border-radius: 20px;
  border: 0;
  outline: none;
  background-color: #eaeaea;
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