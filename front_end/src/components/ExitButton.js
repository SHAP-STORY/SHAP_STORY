import React from "react";
import styled from "styled-components";
import exit from "../image/lessonout.png";
import { withRouter } from "react-router-dom";

class ExitButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exitState: false,
    };
    this.handlePage = this.handlePage.bind(this);
  }

  handlePage() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <ExitBtn
          onClick={() => {
            this.handlePage();
          }}
          style={{ marginBottom: "5%"}}
        ></ExitBtn>
      </div>
    );
  }
}

const ExitBtn = styled.button`
background-image: url(${exit});
border: none;
background-color: white;
width: 30px;
height: 30px;
position: relative;
cursor: pointer;
marginTop: 60px 
`;

export default withRouter(ExitButton);
