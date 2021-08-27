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
        <ExitBtn
          onClick={() => {
            this.handlePage();
          }}
          style={{ marginBottom: "15%", marginRight:"20px", }}
          src={exit}
        ></ExitBtn>
    );
  }
}

const ExitBtn = styled.img`
width: 45px;
height: 45px;
position: relative;
cursor: pointer;
`;

export default withRouter(ExitButton);
