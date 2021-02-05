import React, { useEffect, useState } from "react";
import step from "../assets/step.png";
import commit from "../assets/commit.png";
import reset from "../assets/reset.png";
import styled, { keyframes, css } from "styled-components";
import Header from "./Header";
import * as db from "../apis/firebase";

const Wrapper = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 600px;
    border: 1px solid black;
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
    padding: ${(props) => {
        if (props.complete === "doing") {
            return "3rem 0 3rem 0";
        } else {
            return "5rem 0";
        }
    }};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BigAnimation = keyframes`
 0% {
  transform: scale(1);
 }
 100% {
   transform: scale(0.7) translateY(-20%);
 } 
`;
const SmallAnimation = keyframes`
 0% {
  transform: scale(0.7);
 }
 100% {
   transform: scale(1);
 } 
`;
const CommitImg = styled.img`
    width: 215px;
    animation-name: ${({ complete }) =>
        complete === "doing"
            ? css`
                  ${BigAnimation};
              `
            : complete === "done"
            ? css`
                  ${SmallAnimation};
              `
            : null};
    animation-duration: 2s;
    animation-iteraion-count: infinite;
    animation-fill-mode: forwards;
`;
const CommitText = styled.div`
    font-size: 14px;
    color: #332820;
`;
const CommitInput = styled.input`
    width: 255px;
    height: 44px;
    font-weight: bold;
    border: solid 1px #707070;
    margin-top: 16px;
`;
const CommitName = styled.div`
    font-size: 16px;
    font-weight: 800;
    color: #332820;
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

//이전 커밋 내용 로그에 보이기!
const GitCommit = ({ setPage }) => {
    const [inputName, setInputName] = useState("");
    const [isTyping, setTyping] = useState(false);
    const [complete, setComplete] = useState("start");
    const toggleCompleted = (status) => {
        console.log("clicked");
        setComplete(status);
    };
    const [curData, setData] = useState([]);

    const getData = async () => {
        const newData = await db.getTestData();
        setData(curData.concat(newData));
    };

    // 최초 렌더링 이후에 실행하기 위해 useEffect 내부에서 함수 실행
    useEffect(() => {
        getData();
    }, []);

    const gitCommit = async () => {
        await db.gitCommit(inputName);
    };


    // const movePage = (page) => {
    //     history.push(`/${page}`);
    // };

//     const gitLog = async () => {
//     const newLog = await db.gitLog();
//     setLog(curLog.concat(newLog));
//   };

    const movePage = (page) => {
        // eslint-disable-next-line no-restricted-globals
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
            <CommitBox complete={complete}>
                <CommitImg src={commit} complete={complete}></CommitImg>
                {complete === "doing" ? <CommitText>주머니 이름 정해줘~ 먹을 때 찾기 편하게 :)</CommitText> : null}
                {complete === "done" ? (
                    <CommitName>{inputName}</CommitName>
                ) : complete === "doing" ? (
                    <CommitInput
                        value={inputName}
                        onChange={(e) => {
                            setInputName(e.target.value);
                            setTyping(true);
                        }}
                    ></CommitInput>
                ) : null}
            </CommitBox>
            {complete === "start" ? (
                <AddButton
                    onClick={() => toggleCompleted("doing")}
                    style={{
                        backgroundColor: "#755e4c",
                    }}
                >
                    도토리 넣은 주머니 이름 정하기
                </AddButton>
            ) : (
                <AddButton
                    onClick={() => {
                        setTyping(false);
                        gitCommit();
                        toggleCompleted("done");
                        setTimeout(() => setPage("push"), 3000); //5초 딜레이
                    }}
                    style={{
                        backgroundColor: `${isTyping ? " #2ed37e" : "#e5e5e5"}`,
                    }}
                >
                    주머니 이름 결정하기
                </AddButton>
            )}
        </Wrapper>
    );
};

export default GitCommit;
