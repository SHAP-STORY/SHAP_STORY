import React from "react";
import styled from "styled-components";
import Iframe from "react-iframe";
import basicImg from "./image/level_up_image.png";
import divider from "./image/divider.png";
import user_info from "./variables/user_info";

import ExitButton from "./components/ExitButton";
import nextButton from "./image/nextButton.png";
import previewButton from "./image/PreviewButton.png";
import Ad_contents01 from "./components/Ad_contents01";

class Advanced extends React.Component {
    constructor(props) {
        super(props); // content_data에 순서대로 배열에 들어가 있으면 page index에 따라 가져오는 것.
        this.state = {
            userId: user_info[1],
            content_data: "",
            content: "./content/개미와베짱이.html",
            page: "",
        };
        this.handleNext = this.handleNext.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
    }

    handleNext() {
        console.log("in");
    }

    handlePreview() {
    }

    componentDidMount() {
    }

    render() {
        return (
            <RowAlign>
                <ColAlign>
                    <img
                        style={{width: "80px", margin: "40% 0 20% 0"}}
                        src={basicImg}
                    ></img>
                    <h5 style={{marginBottom: "5%", fontWeight: "bold"}}>목차</h5>
                    <img style={{marginBottom: "5%"}} src={divider}></img>
                    <ContentButton>🤍 1차시</ContentButton>
                    <ContentButton>🤍 2차시</ContentButton>
                    <ContentButton style={{marginBottom: "20%"}}>
                        🤍 3차시
                    </ContentButton>
                    <h5 style={{marginBottom: "5%", fontWeight: "bold"}}>소통하기</h5>
                    <img style={{marginBottom: "5%"}} src={divider}></img>
                    <ContentButton style={{marginBottom: "100%"}}>
                        🙋‍♀ 질문하기
                    </ContentButton>
                    <div>
                        <PreviewBtn
                            style={{
                                marginBottom: "15%",
                                width: "40px",
                                marginRight: "20px",
                            }}
                            src={previewButton}
                            onClick={this.handlePreview}
                        ></PreviewBtn>
                        <ExitButton/>
                        <NextBtn
                            style={{marginBottom: "15%", width: "40px"}}
                            src={nextButton}
                            onClick={this.handleNext}
                        ></NextBtn>
                    </div>
                </ColAlign>

                <Ad_contents01></Ad_contents01>
            </RowAlign>

        );
    }
}

const ContentButton = styled.button`
  font-size: 15px;
  background-color: #00ff0000;
  border: 0;
  padding: 5px 10px 10px 10px;
  border-radius: 20px;
  height: 35px;
`;

const RowAlign = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

const ColAlign = styled.div`
  width: 15%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  align: left;
  box-shadow: 10px 10px 10px #dadbdb;
  border-radius: 20px;
`;

const NextBtn = styled.img`
  cursor: pointer;
`;

const PreviewBtn = styled.img`
  cursor: pointer;
`;

export default Advanced;