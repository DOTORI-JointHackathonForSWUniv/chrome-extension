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
  const [curTab, setCurTab] = useState(tab);

  const moveToAdd = () => {
    changeTab("add");
    setCurTab("add");
  };

  const moveToCommit = () => {
    changeTab("commit");
    setCurTab("commit");
  };

  const moveToPush = () => {
    changeTab("push");
    setCurTab("push");
  };

  useEffect(() => {
    setCurTab(curTab);
  }, []);

  console.log("@@ cur tab ", curTab);

  return (
    <StepBoxRoot>
      <Step onClick={moveToAdd} isCurTab={curTab == "add"}>
        {curTab == "add" ? <StepButton src={step}></StepButton> : <div />}
        {curTab == "add" ? (
          <StepTextSelected>도토리 넣기</StepTextSelected>
        ) : (
          <StepTextDefault>도토리 넣기</StepTextDefault>
        )}
      </Step>
      <Step onClick={moveToCommit} isCurTab={curTab == "commit"}>
        {curTab == "commit" ? <StepButton src={step}></StepButton> : <div />}
        {curTab == "commit" ? (
          <StepTextSelected>도토리 넣기</StepTextSelected>
        ) : (
          <StepTextDefault>도토리 넣기</StepTextDefault>
        )}
      </Step>
      <Step onClick={moveToPush} isCurTab={curTab == "push"}>
        {curTab == "push" ? <StepButton src={step}></StepButton> : <div />}
        {curTab == "push" ? (
          <StepTextSelected>도토리 넣기</StepTextSelected>
        ) : (
          <StepTextDefault>도토리 넣기</StepTextDefault>
        )}
      </Step>
    </StepBoxRoot>
  );
}

export default StepBox;
