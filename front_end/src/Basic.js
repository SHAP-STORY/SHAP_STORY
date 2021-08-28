import React from "react";
import styled from "styled-components";
import Iframe from "react-iframe";
import { post } from "axios";
import basicImg from "./image/basic_image.png";
import microbit from "./image/microbit.png";
import divider from "./image/divider.png";
import user_info from "./variables/user_info";

import ExitButton from "./components/ExitButton";
import nextButton from "./image/nextButton.png";
import previewButton from "./image/PreviewButton.png";
import BC_one_1 from "./components/BC_one_1";
import BC_one_2 from "./components/BC_one_2";
import BC_one_3 from "./components/BC_one_3";
import BC_one_4 from "./components/BC_one_4";

//Redux
import { connect } from "react-redux";
import * as actions from "./_actions/lesson_action";
/*
NOTE 추가해야할 부분
- content html, 컴포넌트, img에 따라서 다르게 받게 하기
- 다음 페이지로 넘겼을 때 DB로 보내기
- 2차시로 넘어갈 수 있게 하기
- next나 pre 눌렀을 때 더 없으면 알람
*/

/* NOTE 통신 동작
- id랑 지금 차시로 lessonrate 있는지 확인
- 지금 차시로 contents,title 받아오기
- contents[page]로 1.이 null 이면 0으로 가져오기
- lessonrate에 업데이트 이때 page는 다음 페이지로 complete는 (page+1)/content.length()*100
- 다음 페이지로 넘어갈 때 마다 다음과 같이 lessonrate 업데이트

2차시로 넘어가면 다음 home에서 2차시 인것만 다른 것
*/
class Basic extends React.Component {
  constructor(props) {
    super(props); // content_data에 순서대로 배열에 들어가 있으면 page index에 따라 가져오는 것.
    this.state = {
      userId: user_info[1],
      content_data: "",
      content: "",
      page: 0,
      title: "",
      lessonrate: "",
      lesson_number: 1,
      lesson_img: "",
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
    this.changeShow = this.changeShow.bind(this);
  }

  handleNext() {
    if (this.state.page === this.state.content.length-1) {
      alert("마지막 페이지입니다.");
      const data_complete = {
        complete: 100,
        id: this.state.userId,
        class_num: this.state.lesson_number,
        page: this.state.page+1
      };
  
      fetch("http://localhost:5000/api/lesson/basic/complete", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data_complete),
      })
    } else {
      this.setState({
        page: this.state.page + 1,
      });
      this.setState({
        content: this.state.content_data[this.state.page + 1],
      });
      console.log(this.state.page, this.state.content);

      const data_complete = {
        complete: (this.state.page+1)/this.state.content_data.length*100,
        id: this.state.userId,
        class_num: this.state.lesson_number,
        page: this.state.page+1
      };
  
      fetch("http://localhost:5000/api/lesson/basic/complete", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data_complete),
      })
    }
  }

  handlePreview() {
    if (this.state.page === 0) {
      alert("첫 번째 페이지 입니다.");
    } else {
      this.setState({
        page: this.state.page - 1,
      });
      this.setState({
        content: this.state.content_data[this.state.page - 1],
      });
      console.log(this.state.page, this.state.content);
    }
  }

  componentDidMount() {
    const data_check = {
      id: this.state.userId,
      lesson_num: this.state.lesson_number,
    };

    fetch("http://localhost:5000/api/lesson/basic/lessionrate", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data_check),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json === "") {
          this.setState({
            page: 0,
          });
        }else{
          this.setState({
            page: parseInt(json[0].page)
          })
        }
        console.log(json);
        this.setState({ content_data: json });
      })
      .catch((err) => console.log(err));
    const data_content = {
      id: this.state.userId,
      index: this.state.lesson_number,
    };

    fetch("http://localhost:5000/api/lesson/basic/content", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data_content),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          content_data: json[0].contents.split(","),
          title: json[0].title,
          lesson_img: json[0].img,
        });
        this.setState({
          content: this.state.content_data[this.state.page],
        });
        if (this.state.content.slice(0, 4) === "http") {
          console.log("http");
        } else if (this.state.content.slice(-4, -1) === ".png") {
          console.log("png");
        } else {
          console.log("component");
          console.log(this.state.content);
          this.changeShow();
        }
      })
      .catch((err) => console.log(err));
  }
  changeShow() {
    const data = this.state.content;
    if (data === "BC_one_1") {
      return <BC_one_1 />;
    } else if (data === "BC_one_2") {
      return <BC_one_2 />;
    } else if (data === "BC_one_3") {
      return <BC_one_3 />;
    }else if (data === "BC_one_4") {
      return <BC_one_4 />;
    }
  }

  render() {
    return (
      <div>
        <Header style={{ marginLeft: "70%"}}>
          <img
            src={microbit}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "10px",
              margin: "auto 10px",
            }}
          />
          <h4 style={{ marginTop: "0.5%" }}> {this.state.title}</h4>
        </Header>
        <RowAlign>
          <ColAlign>
            <img
              style={{ width: "80px", margin: "40% 0 20% 0" }}
              src={basicImg}
            ></img>
            <h5 style={{ marginBottom: "5%", fontWeight: "bold" }}>목차</h5>
            <img
              style={{ marginBottom: "5%", width: "70%" }}
              src={divider}
            ></img>
            <ContentButton>🤍 1차시</ContentButton>
            <ContentButton>🤍 2차시</ContentButton>

            <h5 style={{ marginTop: "15%", marginBottom: "5%", fontWeight: "bold" }}>소통하기</h5>
            <img
              style={{ marginBottom: "5%", width: "70%" }}
              src={divider}
            ></img>
            <ContentButton style={{ marginBottom: "100%" }}>
              🙋‍♀ 질문하기
            </ContentButton>
            <div>
              <h4 style={{ marginBottom: "20%" }}>
                {this.state.page + 1} / {this.state.content_data.length}{" "}
              </h4>
            </div>
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
              <ExitButton />
              <NextBtn
                style={{ marginBottom: "15%", width: "40px" }}
                src={nextButton}
                onClick={this.handleNext}
              ></NextBtn>
            </div>
          </ColAlign>
          <div id="content"></div>
          {this.changeShow()}
        </RowAlign>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // ./_actions/user_action.js의 객체와 이름 동일. 함수를 통한 action 전달
  BasicUser: () => dispatch(actions.basicAction()),
});

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
const Header = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export default connect(mapDispatchToProps)(Basic);