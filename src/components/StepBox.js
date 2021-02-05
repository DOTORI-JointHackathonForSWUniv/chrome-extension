import React, { useEffect, useState } from "react";
import styled from "styled-components";
import step from "../assets/step.png";

const StepBoxRoot = styled.span`
    display: flex;
    flex-direction: row;
    padding-top: 22px;
`;
const Step = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 30px;
    align-items: center;
    cursor: pointer;
`;
const StepButton = styled.img`
    width: 10px;
    height: 9px;
`;

const StepTextSelected = styled.div`
    padding-top: 11px;
    font-size: 15px;
    color: #2ed37e;
`;

const StepTextDefault = styled.div`
    padding-top: 20px;
    font-size: 15px;
    color: #d2d2d2;
`;

function StepBox({ changeTab, tab }) {
    const moveToAdd = () => {
        changeTab("add");
    };

    const moveToCommit = () => {
        changeTab("commit");
    };

    const moveToPush = () => {
        changeTab("push");
    };

    return (
        <StepBoxRoot>
            <Step onClick={moveToAdd} isCurTab={tab == "add"}>
                {tab == "add" ? <StepButton src={step}></StepButton> : <div />}
                {tab == "add" ? <StepTextSelected>도토리 넣기</StepTextSelected> : <StepTextDefault>도토리 넣기</StepTextDefault>}
            </Step>
            <Step onClick={moveToCommit} isCurTab={tab == "commit"}>
                {tab == "commit" ? <StepButton src={step}></StepButton> : <div />}
                {tab == "commit" ? <StepTextSelected>주머니 이름 정하기</StepTextSelected> : <StepTextDefault>주머니 이름 정하기</StepTextDefault>}
            </Step>
            <Step onClick={moveToPush} isCurTab={tab == "push"}>
                {tab == "push" ? <StepButton src={step}></StepButton> : <div />}
                {tab == "push" ? <StepTextSelected>도토리 보관하기</StepTextSelected> : <StepTextDefault>도토리 보관하기</StepTextDefault>}
            </Step>
        </StepBoxRoot>
    );
}

export default StepBox;
