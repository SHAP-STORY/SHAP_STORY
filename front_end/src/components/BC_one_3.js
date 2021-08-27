import React from "react";
import styled from "styled-components";
import microbit from "../image/microbit.png";
import makecode from "../image/makecode.PNG";
import direction from "../image/direction.png";

class BC_one_3 extends React.Component {
    render() {
      return (
          <ColAlign>
              <h2 style={{fontSize: "40px", textAlign:"left", marginBottom: "30px"}}>
                ▶ 예시를 하나 들어볼까요?
              </h2>
              <h4 style={{textAlign: "left", marginLeft: "15px", marginBottom: "15px"}}>
                LED는 전기가 흐르면 마이크로비트 앞면에 빛이 나는 출력 장치입니다.
              </h4>
              <h4 style={{textAlign: "left", marginLeft: "15px", marginBottom: "10px"}}>
                - 이 LED화면에 하트 아이콘이 나타나도록 만들어보겠습니다.
              </h4>
              <h4 style={{textAlign: "left", marginLeft: "45px", marginBottom: "20px"}}>
                1. '기본' 메뉴에 아이콘 출력 블록을 가져옵니다.
                <br/>
                2. 이 블록은 내장된 다양한 아이콘 중 여러분이 선택한 아이콘 하나를 LED 화면에 출력하는 것을 의미합니다.
                <br/>
                3.따라서, 이 블록은 "마이크로비트야! LED에 하트 아이콘을 띄워줘!" 라는 명령을 마이크로비트에게 보내고, 마이크로비트는 LED에 하트를 출력합니다.
              </h4>
              <div style={{width: "90%", marginBottom: "20px"}}>
                <img src={makecode} style={{width: "40%"}}></img>
                <img src={direction} style={{width: "10%"}}></img>
                <img src={microbit} style={{width: "20%"}}></img>
              </div>
              <h4 style={{textAlign: "left", marginLeft: "15px", marginBottom: "5%", marginTop: "20px"}}>
                  😀 여러분도 마이크로비트에게 명령을 내리고, 마이크로비트가 여러분이 원하는 행동을 하도록 만들어볼까요?
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

export default BC_one_3;