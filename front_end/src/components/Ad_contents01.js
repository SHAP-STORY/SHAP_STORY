import React from "react";
import styled from "styled-components";

const Ad_contents01 = (props) => {
  return (
    <ColAlign>
      <h2 style={{ fontSize: "100px", marginBottom: "20px", textAlign: "left" }}>🙆🏻‍♀️</h2>
      <h4 style={{ fontSize: "25px", fontWeight: "bold", textAlign: "left" }}>
        #STORY 심화과정에 오신 여러분을 환영합니다!
      </h4>
      <br />
      <h4 style={{ fontSize: "25px", fontWeight: "bold", marginBottom: "20%", textAlign: "left" }}>
        앞으로 3차시 동안 블록 코딩과 마이크로비트, 
        <br /> <br />
        다양한 센서들을 이용해 심화과정을 학습해보겠습니다!
        <br /><br /> 만나서 반가워요 여러분!😍
      </h4>
    </ColAlign>
  );
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

export default Ad_contents01;