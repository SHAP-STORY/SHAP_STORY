import React from "react";
import styled from "styled-components";

class MyWritinglist extends React.Component {
  render() {
    return (
      <div>
        <Question>
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
        </Question>
      </div>
    );
  }
}

const Question = styled.div`
  width: 700px;
  height: 100px;
  margin: 15px 0px;
  border-radius: 15px;
  text-align: left;
  cursor: pointer;
`;

export default MyWritinglist;