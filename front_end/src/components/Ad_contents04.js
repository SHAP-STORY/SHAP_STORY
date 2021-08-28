import React from "react";
import styled from "styled-components";
import AD_1_1 from "../image/quiz/AD_1_1.PNG";

class Ad_contents04 extends React.Component {
  render() {
    return (
      <ColAlign>
        <h2
          style={{ fontSize: "40px", textAlign: "left", marginBottom: "20px" }}
        >
        </h2>
        <div>
          <img
            src={AD_1_1}
            style={{ width: "90%", marginBottom: "10%"}}
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

export default Ad_contents04;
