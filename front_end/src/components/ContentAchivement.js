import React from "react";
import styled from "styled-components";
import playIcon from "../image/playIcon.png";

class ContentAchivement extends React.Component {
  render() {
    return (
      <div>
        <Class>
          <img
            src={this.props.img}
            style={{
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              margin: "auto",
              width: "150px",
            }}
          >
            <div style={{ fontWeight: "bold" }}>{this.props.id}차시</div>
            <div style={{ fontSize: "14px", marginTop: "5px" }}>
              {this.props.title}
            </div>
          </div>
          <div style={{ display: "flex", margin: "auto 0" }}>
            <Progress done="40%" />
            <text
              style={{
                marginLeft: "15px",
                lineHeight: "10px",
                color: "#A7A7A7",
              }}
            >
              {this.props.achivement}%
            </text>
          </div>
          <PlayButton>
            <img src={playIcon}></img>
          </PlayButton>
        </Class>
      </div>
    );
  }
}

const Progress = ({ done }) => {
    return (
      <ProgressBar>
        <ProgressDone style={{ width: done }} />
      </ProgressBar>
    );
  };
  
  const ProgressBar = styled.div`
    width: 200px;
    height: 5px;
    background-color: #d6d6d6;
  `;
  
  const ProgressDone = styled.div`
    height: 5px;
    background-color: #32cf99;
  `;

const Class = styled.div`
  width: 700px;
  height: 120px;
  margin: 15px auto;
  border-radius: 15px;
  box-shadow: 3px 3px 3px 3px #e2e2e2;
  display: flex;
`;

const PlayButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 15px;
  border: none;
  background-color: #32cf9a;
  box-shadow: 2px 2px 2px 2px #e2e2e2;
  margin: auto;
  cursor: pointer;
`;

export default ContentAchivement;
