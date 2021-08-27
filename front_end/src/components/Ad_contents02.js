import React from "react";
import styled from "styled-components";

const Ad_contents02 = (props) => {
    return (
        <ColAlign>
            <text style={{fontSize: "100px", marginBottom: "20px"}}>🔔</text>
            <text style={{fontSize: "25px", fontWeight: "bold", marginBottom: "30px"}}>오늘의 주제는?</text>
            <text style={{textAlign: "left"}}>1. 배짱이의 기타를 만들어 봅니다.<br/>
                2. "~핀을 연결" 블록을 이용하여 각각의 기타 줄을 제어해봅니다.<br/>
                3. 나만의 기타를 만들어보고 연주해봅니다.</text>
        </ColAlign>

    )
};

const ColAlign = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align: left;
`;

export default Ad_contents02