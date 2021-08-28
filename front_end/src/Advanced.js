import React from "react";
import styled from "styled-components";
import Iframe from "./components/iframe";
import basicImg from "./image/level_up_image.png";
import divider from "./image/divider.png";
import user_info from "./variables/user_info";

import ExitButton from "./components/ExitButton";
import nextButton from "./image/nextButton.png";
import previewButton from "./image/PreviewButton.png";
import Ad_contents01 from "./components/Ad_contents01";
import Ad_contents02 from "./components/Ad_contents02";
import Ad_contents03 from "./components/Ad_contents03";
import Ad_contents04 from "./components/Ad_contents04";

//Redux
import { connect } from "react-redux";
import * as actions from "./_actions/lesson_action";

class Advanced extends React.Component {
  constructor(props) {
    super(props); // content_data에 순서대로 배열에 들어가 있으면 page index에 따라 가져오는 것.
    this.state = {
      userId: user_info[1],
      content_data: "",
      content: "./content/개미와베짱이.html",
      page: 0,
      title: "",
      lessonrate: "",
      lesson_number: 1,
      lesson_img: "",
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
    this.changeShow = this.changeShow.bind(this);
    this.changeShowH = this.changeShowH.bind(this);
  }

  handleNext() {
    if (this.state.page === this.state.content.length - 1) {
      alert("마지막 페이지입니다.");
      const data_complete = {
        complete: 100,
        id: this.state.userId,
        class_num: this.state.lesson_number,
        page: this.state.page + 1,
      };

      fetch("http://localhost:5000/api/lesson/advanced/complete", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data_complete),
      });
    } else {
      this.setState({
        page: this.state.page + 1,
      });
      this.setState({
        content: this.state.content_data[this.state.page + 1],
      });
      console.log(this.state.page, this.state.content);

      const data_complete = {
        complete:
          ((this.state.page + 1) / this.state.content_data.length) * 100,
        id: this.state.userId,
        class_num: this.state.lesson_number,
        page: this.state.page + 1,
      };

      fetch("http://localhost:5000/api/lesson/advanced/complete", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data_complete),
      });
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

    fetch("http://localhost:5000/api/lesson/advanced/lessionrate", {
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
        } else {
          this.setState({
            page: parseInt(json[0].page), // https://ojnsr4.axshare.com/#id=6llcox&p=%EA%B0%9C%EB%AF%B8%EC%99%80%EB%B0%B0%EC%A7%B1%EC%9D%B4
          });
        }
        console.log(json);
        this.setState({ content_data: json });
      })
      .catch((err) => console.log(err));
    const data_content = {
      id: this.state.userId,
      index: this.state.lesson_number,
    };

    fetch("http://localhost:5000/api/lesson/advanced/content", {
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
        console.log(this.state.content_data)
        this.setState({
          content: this.state.content_data[this.state.page],
        });
        if (this.state.content.slice(0, 4) === "http") {
          console.log("http");
          this.changeShowH();
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
    if (data === "Ad_contents01") {
      return <Ad_contents01 />;
    } else if (data === "Ad_contents02") {
      return <Ad_contents02 />;
    } else if (data === "Ad_contents03") {
      return <Ad_contents03 />;
    } else if (data === "Ad_contents04") {
      return <Ad_contents04 />;
    }
  }

  changeShowH() {
    return(
      <div className="App">
      <Iframe source={this.state.content} />
  </div>
    )
  }

  render() {
    return (
      <div>
        <Header style={{ marginLeft: "70%" }}>
          <img
            src={this.state.lesson_img}
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
            <h5
              style={{
                marginTop: "15%",
                marginBottom: "5%",
                fontWeight: "bold",
              }}
            >
              소통하기
            </h5>
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
          {this.changeShow()}
          <div 
          style={{ marginLeft: "5%", marginBottom: "1%"}}>
          {this.changeShowH()}
          </div>
        </RowAlign>
      </div>
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

const Header = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export default Advanced;