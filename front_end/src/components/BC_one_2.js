import React from "react";
import styled from "styled-components";
import microbit from "../image/microbit.png";
import makecode from "../image/makecode.PNG";
import direction from "../image/direction.png";

class BC_one_2 extends React.Component {
  render() {
    return (
      <ColAlign>
        <h2
          style={{ fontSize: "40px", textAlign: "left", marginBottom: "30px" }}
        >
          Q. 마이크로비트가 어떤 행동을 하도록 만들기 위해서는 어떻게
          해야하나요?
        </h2>
        <h4
          style={{ textAlign: "left", marginLeft: "15px", marginBottom: "15%" }}
        >
          컴퓨터가 작성한 프로그램에 따라 작업을 수행하는 것처럼, <br />
          <br />
          마이크로비트도 여러분이 내린 명령에 따라 작업을 수행합니다.
          <br />
          <br />
          Microsoft MakeCode나 Python코드 편집기를 이용하여 <br />
          <br />
          프로그램을 작성하여 마이크로비트에게 명령을 내릴 수 있습니다.
        </h4>
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

export default BC_one_2;
