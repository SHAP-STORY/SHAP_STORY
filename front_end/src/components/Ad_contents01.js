import React from "react";
import styled from "styled-components";

const Ad_contents01 = (props) => {
  return (
    <ColAlign>
      <h2 style={{ fontSize: "100px", marginBottom: "20px", textAlign: "left" }}>ππ»ββοΈ</h2>
      <h4 style={{ fontSize: "25px", fontWeight: "bold", textAlign: "left" }}>
        #STORY μ¬νκ³Όμ μ μ€μ  μ¬λ¬λΆμ νμν©λλ€!
      </h4>
      <br />
      <h4 style={{ fontSize: "25px", fontWeight: "bold", marginBottom: "20%", textAlign: "left" }}>
        μμΌλ‘ 3μ°¨μ λμ λΈλ‘ μ½λ©κ³Ό λ§μ΄ν¬λ‘λΉνΈ, 
        <br /> <br />
        λ€μν μΌμλ€μ μ΄μ©ν΄ μ¬νκ³Όμ μ νμ΅ν΄λ³΄κ² μ΅λλ€!
        <br /><br /> λ§λμ λ°κ°μμ μ¬λ¬λΆ!π
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