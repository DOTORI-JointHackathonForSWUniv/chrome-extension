import React, { useEffect, useState } from "react";
import step from "../assets/step.png";
import home from "../assets/home.png";
import commit from "../assets/commit.png";
import reset from "../assets/reset.png";
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

const PushBox = styled.div`
    padding: 4rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const CommitBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
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
const ResetImg = styled.img`
    width: 43px;
    height: 41px;
    position: absolute;
    margin-left: 140px;
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

const GitPush = ({ history }) => {
    const [complete, setComplete] = useState(false);

    const movePage = (page) => {
        history.push(`/${page}`);
    };

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
                <CommitBox>
                    <ResetImg src={reset}></ResetImg>
                    <CommitImg src={commit}></CommitImg>
                    <CommitName>겨울에 먹을 비상 도토리</CommitName>
                </CommitBox>
                <HomeImg src={home}></HomeImg>
            </PushBox>
            <AddButton
                onClick={() => {
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
