import React from "react";
import styled from "styled-components";
import signupComBg from "./image/signupComBg.png";
import {Link} from "react-router-dom";

const SignUpComplete = (props) => {
    return(
            <Background>
                <Text style={{textDecoration: "none"}}>회원가입이 완료되었습니다!</Text>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <MainBtn>
                        <HomeIcon>#.</HomeIcon>
                        <div>으로 이동</div>
                    </MainBtn>
                </Link>
                
            </Background>
    );
}

const Background = styled.div`
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-image: url(${signupComBg});
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Text = styled.div`
    font-size: 50px;
    font-weight: bold;
    color: #EB6282;
`;

const MainBtn = styled.div`
    font-size: 20px;
    background-color: #EB6282;
    border: 0;
    width: 170px;
    height: 60px;
    border-radius: 30px;
    color: #3F3D56;
    font-weight: bold;
    cursor: pointer;
    margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HomeIcon = styled.div`
    width: 35px;
    height: 35px;
    background-color: #54B192;
    border-radius: 20px;
    margin-right: 5px;
    text-align: center;
`;

export default SignUpComplete;