import React from "react";
import styled from "styled-components";
import profile from "./image/profile.png"
import divider from "./image/divider.png"


const Basic = (props) => {
    return (
        <RowAlign>
           <ColAlign>
               <ProfileImg src={profile}></ProfileImg>
               <h3 style={{marginBottom: "5%"}}>목차</h3>
               <img style={{marginBottom: "5%"}} src={divider}></img>
               <ContentButton>🤍 1차시</ContentButton>
               <ContentButton>🤍 2차시</ContentButton>
               <ContentButton style={{marginBottom: "20%"}}>🤍 3차시</ContentButton>

               <h3 style={{marginBottom: "5%"}}>소통하기</h3>
               <img style={{marginBottom: "5%"}} src={divider}></img>
               <ContentButton>🙋‍♀ 질문하기</ContentButton>
           </ColAlign>
        </RowAlign>

    )
}

const ContentButton = styled.button`
  font-size: 17px;
  background-color: #00ff0000;
  border: 0;
  padding: 5px 10px 10px 10px;
  border-radius: 20px;
  height: 35px;
`;

const ColAlign = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;s
    justify-content: center;
    flex-direction: column;
    align: left;
`;

const RowAlign = styled.div`
    width: 15%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-radius: 20px;
    box-shadow: 10px 10px 10px #dadbdb;
`

const ProfileImg = styled.img`
    margin: 20% 0 40% 0;
    width: 80px;
    height: 80px;
    border-radius: 40px;
`

export default Basic;