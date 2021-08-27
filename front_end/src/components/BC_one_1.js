import React from "react";
import styled from "styled-components";
import microbit from "../image/microbit_basic.png";

class BC_one_1 extends React.Component {
  render() {
    return (
      <ColAlign>
        <h2
          style={{ fontSize: "40px", textAlign: "left", marginBottom: "30px" }}
        >
          • 마이크로비트란?
        </h2>
        <h4
          style={{
            textAlign: "left",
            marginLeft: "15px",
            marginBottom: "15px",
          }}
        >
          마이크로비트는 입력(센서), 출력(제어)을 할 수 있는 작은 크기의
          컴퓨터입니다.
        </h4>
        <br />
        <h4
          style={{ textAlign: "left", marginLeft: "15px", marginBottom: "15%" }}
        >
          마이크로비트에 장착된 LED, 버튼, 센서와 같은 여러 입출력 기능을
          이용하여
          <br />
          <br />
          마이크로비트가 다양한 행동을 하도록 만들 수 있어요!
        </h4>
        <div>
          <img
            src={microbit}
            style={{ width: "250px", marginTop: "30px" }}
          ></img>
        </div>
      </ColAlign>
    );
  }
}

const ColAlign = styled.div`
  margin-left: 50px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  align: left;
`;

export default BC_one_1;
