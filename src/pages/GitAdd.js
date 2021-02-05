import React, { useEffect } from "react";
import dotori from "../assets/dotori.png";
import basket from "../assets/basket.png";
import step from "../assets/step.png";
import styled from "styled-components";
import Header from "./Header";

const Wrapper = styled.div`
    background-color: #ffffff;
    border-style: solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 99%;
`;
const StepBox = styled.span`
    display: flex;
    flex-direction: row;
    padding-top: 22px;
`;
const Step = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 30px;
    align-items: center;
`;
const StepButton = styled.img`
    width: 10px;
    height: 9px;
`;

const StepText = styled.div`
    padding-top: 11px;
    font-size: 15px;
    color: #d2d2d2;
`;

const ImgBox = styled.div`
    padding: 5rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const DotoriImg = styled.img`
    width: 113px;
    height: 113px;
`;
const BasketImg = styled.img`
    width: 215px;
    height: 215px;
    margin-left: 8rem;
`;

const AddButton = styled.button`
    width: 460px;
    height: 70px;
    border-radius: 5px;
    background-color: #755e4c;
    text-align: center;
    color: #ffffff;
    font-size: 20px;
`;

const GitAdd = ({ history }) => {
    const movePage = (page) => {
        history.push(`/${page}`);
    };

    return (
        <Wrapper>
            <Header></Header>
            <StepBox>
                <Step>
                    <StepButton src={step}></StepButton>
                    <StepText style={{ color: "#2ed37e" }}>도토리 넣기</StepText>
                </Step>
                <Step>
                    <StepText style={{ paddingTop: "22px" }}>주머니 이름 정하기</StepText>
                </Step>
                <Step>
                    <StepText style={{ paddingTop: "22px" }}>도토리 보관하기</StepText>
                </Step>
            </StepBox>
            <ImgBox>
                <DotoriImg src={dotori}></DotoriImg>
                <BasketImg src={basket}></BasketImg>
            </ImgBox>
            <AddButton
                onClick={() => {
                    movePage("GitCommit");
                }}
            >
                주머니에 내가 만든 도토리 넣기
            </AddButton>
        </Wrapper>
    );
};

export default GitAdd;
