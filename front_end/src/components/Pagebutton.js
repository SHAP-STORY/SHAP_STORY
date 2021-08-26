import React from "react";
import styled from "styled-components";

class PageButtomComponent extends React.Component {
    render() {
        return (
            <div>
                <PageDiv>
                    <PageButton>◀</PageButton>
                    <PageButton>1</PageButton>
                    <PageButton>2</PageButton>
                    <PageButton>3</PageButton>
                    <PageButton>4</PageButton>
                    <PageButton>5</PageButton>
                    <PageButton>▶</PageButton>
                </PageDiv>
            </div>
        );
    }
}


const PageDiv = styled.div`
    margin: 0px 10px 0px 10px;
    display: flex;
    justify-content: center;
    flex-direction: row;
`;

const PageButton = styled.button`
    font-size: 17px;
    background-color: #00ff0000;
    border:0;
    border-radius: 20px;
    height: 35px; 
    
    &:hover {
    background: #dadbdb;
    }
`;