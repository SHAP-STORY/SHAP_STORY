import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class QuestionComponent extends React.Component {
    render() {
        return (
            <div>
                <ContentDiv>
                    <ProfileImg src={this.props.img}></ProfileImg>
                    <Title_Author>
                        <Link to={`/showQuestion/${this.props.index}`}>
                            <h6 style={{ margin: "0", fontWeight: "bold" }}>{this.props.title}</h6></Link>
                        <text style={{ fontSize: "80%", marginTop: "10px" }}>작성자: {this.props.student_id}</text>
                    </Title_Author>
                    <text style={{ fontSize: "80%", fontWeight: "bold" }}>작성일: {this.props.date}</text>
                </ContentDiv>
            </div >
        );
    }
}
const ProfileImg = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 60px;
`;

const ContentDiv = styled.div`
    margin: 20px 0px 20px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

// 질문 제목, 작성자 수직정렬을 위한 div
const Title_Author = styled.div`
    width: 60%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-left: 20px;
    text-align: left;
    align: left;
`;

export default QuestionComponent;