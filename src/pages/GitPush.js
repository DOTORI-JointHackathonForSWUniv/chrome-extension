import React, { useEffect, useState } from "react";
import step from "../assets/step.png";
import home from "../assets/home.png";
import commit from "../assets/commit.png";
import reset from "../assets/reset.png";
import styled, { keyframes, css } from "styled-components";
import Header from "./Header";

const Wrapper = styled.div`
    background-color: #ffffff;
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

const PushBox = styled.div`
    padding: 4rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const moveAnimation = keyframes`
 0% {
    transform: scale(1)
 }
 30%{
    transform: scale(2)
 }
 50% { 
     transform: translateX(125%)
     animation-timing-function: cubic-bezier(0.33333, 0, 0.66667, 0.33333) }
 100% {
   transform: scale(1) translateX(233%) translateY(50%);
 } 
`;
const CommitBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    animation-name: ${({ clicked }) =>
        clicked
            ? css`
                  ${moveAnimation};
              `
            : null};
    animation-duration: 2s;
    animation-iteraion-count: infinite;
    animation-fill-mode: forwards;
`;
const CommitName = styled.div`
    font-size: 16px;
    font-weight: 800;
    color: #332820;
    margin-top: 1rem;
`;
const CommitImg = styled.img`
    width: 113px;
    height: 113px;
`;
const HomeImg = styled.img`
    width: 225px;
    height: 225px;
    margin-left: 10rem;
`;
const AddButton = styled.button`
    border: none;
    width: 460px;
    height: 70px;
    border-radius: 5px;
    text-align: center;
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
`;

const GitPush = ({ setPage }) => {
    const [complete, setComplete] = useState(false);

    const [clicked, setClicked] = useState(false);
    const toggleClicked = () => setClicked((value) => !value);

    return (
        <Wrapper>
            <Header></Header>
            <StepBox>
                <Step>
                    <StepText style={{ paddingTop: "20px" }}>도토리 넣기</StepText>
                </Step>
                <Step>
                    <StepText style={{ paddingTop: "20px" }}>주머니 이름 정하기</StepText>
                </Step>
                <Step>
                    <StepButton src={step}></StepButton>
                    <StepText style={{ color: "#2ed37e" }}>도토리 보관하기</StepText>
                </Step>
            </StepBox>
            <PushBox>
                <CommitBox clicked={clicked} onClick={toggleClicked}>
                    <CommitImg src={commit}></CommitImg>
                    <CommitName>겨울에 먹을 비상 도토리</CommitName>
                </CommitBox>
                <HomeImg src={home}></HomeImg>
            </PushBox>
            <AddButton
                onClick={() => {
                    toggleClicked();
                    setComplete(true);
                }}
                style={{ backgroundColor: `${complete ? " #e5e5e5" : "#755e4c"}` }}
            >
                도토리 내 집에 보관하기
            </AddButton>
        </Wrapper>
    );
};

export default GitPush;
