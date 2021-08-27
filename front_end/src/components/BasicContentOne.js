import React, {Component} from "react";
import styled from "styled-components";
import microbit from "../image/microbit.png";
import makecode from "../image/makecode.PNG";
import direction from "../image/direction.png";

class BasicContentOne extends React.Component {
    render() {
      return (
          <ColAlign>
              <text style={{fontSize: "40px", textAlign:"left", marginBottom: "5px"}}>•마이크로비트란?</text>
              <text style={{textAlign: "left", marginLeft: "15px", marginBottom: "15px"}}>
                마이크로비트는 입력(센서), 출력(제어)을 할 수 있는 작은 크기의 컴퓨터입니다.
                <br/>
                마이크로비트에 장착된 LED, 버튼, 센서와 같은 여러 입출력 기능을 이용하여 마이크로비트가 다양한 행동을 하도록 만들 수 있어요!
              </text>
              <text style={{textAlign: "left", fontSize: "25px", marginLeft: "10px", marginBottom: "5px"}}>
                Q. 마이크로비트가 어떤 행동을 하도록 만들기 위해서는 어떻게 해야하나요?
              </text>
              <text style={{textAlign: "left", marginLeft: "30px", marginBottom: "15px"}}>
                컴퓨터가 작성한 프로그램에 따라 작업을 수행하는 것처럼, 마이크로비트도 여러분이 내린 명령에 따라 작업을 수행합니다.
                <br/>
                Microsoft MakeCode나 Python코드 편집기를 이용하여 프로그램을 작성하여 마이크로비트에게 명령을 내릴 수 있습니다.
              </text>
              <text style={{textAlign: "left", marginLeft: "27px", marginBottom: "5px", fontWeight: "bold"}}>
                ▶예시를 하나 들어볼까요?
              </text>
              <text style={{textAlign: "left", marginLeft: "37px", marginBottom: "3px"}}>
                LED는 전기가 흐르면 마이크로비트 앞면에 빛이 나는 출력 장치입니다.
              </text>
              <text style={{textAlign: "left", marginLeft: "37px"}}>
                이 LED화면에 하트 아이콘이 나타나도록 만들어보겠습니다.
              </text>
              <text style={{textAlign: "left", marginLeft: "45px", marginBottom: "15px"}}>
                '기본' 메뉴에 아이콘 출력 블록을 가져옵니다.
                <br/>
                이 블록은 내장된 다양한 아이콘 중 여러분이 선택한 아이콘 하나를 LED 화면에 출력하는 것을 의미합니다.
                <br/>
                따라서, 이 블록은 "마이크로비트야! LED에 하트 아이콘을 띄워줘!" 라는 명령을 마이크로비트에게 보내고, 마이크로비트는 LED에 하트를 출력합니다.
              </text>
              <div style={{width: "90%", marginBottom: "20px"}}>
                <img src={makecode} style={{width: "40%"}}></img>
                <img src={direction} style={{width: "10%"}}></img>
                <img src={microbit} style={{width: "20%"}}></img>
              </div>
              <text style={{textAlign: "left", fontSize: "18px", marginLeft: "35px"}}>😀여러분도 마이크로비트에게 명령을 내리고, 마이크로비트가 여러분이 원하는 행동을 하도록 만들어볼까요?</text>
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

export default BasicContentOne;