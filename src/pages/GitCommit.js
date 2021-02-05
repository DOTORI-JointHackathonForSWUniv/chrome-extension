import React, { useEffect, useState } from "react";
import step from "../assets/step.png";
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

const CommitBox = styled.div`
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const CommitText = styled.div`
    font-size: 14px;
    color: #332820;
    position: relative;
`;
const CommitImg = styled.img`
    width: 215px;
    height: 215px;
    position: relative;
`;
const CommitInput = styled.input`
    width: 255px;
    height: 44px;
    border: solid 1px #707070;
    position: absolute;
    margin-top: 200px;
    /* padding-top: -1rem; */
`;
const CommitName = styled.div`
    font-size: 16px;
    font-weight: 800;
    color: #332820;
`;
const ResetImg = styled.img`
    width: 43px;
    height: 41px;
    position: absolute;
    margin-left: 110px;
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

const GitCommit = ({ history }) => {
    const [inputName, setInputName] = useState("");
    const [isTyping, setTyping] = useState(false);
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
                    <StepButton src={step}></StepButton>
                    <StepText style={{ color: "#2ed37e" }}>주머니 이름 정하기</StepText>
                </Step>
                <Step>
                    <StepText style={{ paddingTop: "20px" }}>도토리 보관하기</StepText>
                </Step>
            </StepBox>
            <CommitBox>
                {complete ? null : <CommitText>주머니 이름 정해줘~ 먹을 때 찾기 편하게 :)</CommitText>}
                <CommitImg src={commit}></CommitImg>
                {complete ? <ResetImg src={reset}></ResetImg> : null}
                {complete ? (
                    <CommitName>{inputName}</CommitName>
                ) : (
                    <CommitInput
                        value={inputName}
                        onChange={(e) => {
                            setInputName(e.target.value);
                            setTyping(true);
                        }}
                    ></CommitInput>
                )}
            </CommitBox>
            <AddButton
                onClick={() => {
                    // movePage("GitPush");
                    setTyping(false);
                    setComplete(true);
                }}
                style={{ backgroundColor: `${isTyping ? " #2ed37e" : "#e5e5e5"}` }}
            >
                주머니 이름 정하기
            </AddButton>
        </Wrapper>
    );
};

export default GitCommit;
