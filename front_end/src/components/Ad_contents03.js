import React from "react";
import styled from "styled-components";
import microbit from "../image/microbit_basic.png";

const Ad_contents03 = (props) => {
  return (
    <ColAlign>
      <img
        src={microbit}
        style={{ width: "250px", marginBottom: "30px" }}
      ></img>
      <h4
        style={{
          fontSize: "25px",
          fontWeight: "bold",
          marginBottom: "5%",
          textAlign: "left",
        }}
      >
        핀이란 무엇일까?
      </h4>
      <h4
        style={{
          fontSize: "25px",
          fontWeight: "bold",
          marginBottom: "20%",
          textAlign: "left",
        }}
      >
        다른 기계랑 연결해 줄 수 있는 통로를 말해요!
        <br />
        <br />
        앞에 3개 핀 P0, P1, P2는 기타 줄과 연결해줄 핀으로 <br /> <br />
        여러 센서들을 연결해주는 역할을 합니다.
        <br />
        <br />
        뒤에 2개 GND, 3V 핀은 전원을 공급해주는 역할을 해줘요!
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

export default Ad_contents03;