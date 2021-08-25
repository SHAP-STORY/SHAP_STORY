import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class TopBar extends React.Component {
  render() {
    return (
      <div>
        <ContentButton>기초학습</ContentButton>
        <ContentButton>심화학습</ContentButton>
        <Link to="./questions">
          <ContentButton>질문하기</ContentButton>
        </Link>
        <Link to="./mypage">
          <ContentButton>마이페이지</ContentButton>
        </Link>
      </div>
    );
  }
}

const ContentButton = styled.button`
  margin: 60px 30px 0px 0px;
  font-size: 17px;
  float: right;
  background-color: #00ff0000;
  border: 0;
  padding: 5px 10px 10px 10px;
  border-radius: 20px;
  height: 35px;

  &:hover {
    background: #dadbdb;
  }
`;

export default TopBar;