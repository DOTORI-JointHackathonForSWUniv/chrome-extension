import React, { useEffect, useState } from "react";
import home from "../assets/home.png";
import commit from "../assets/commit.png";
import styled, { keyframes, css } from "styled-components";
import * as db from "../apis/firebase";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
`;
const ContentBox = styled.div``;
const PrevCommitsContainer = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    position: absolute;
    right: -110px;
`;
const moveAnimation0 = keyframes`
 0% {
    transform: scale(1)
 }
 30%{
    transform: scale(1.7)
 }
 50% { 
     transform: translateX(75%)
     animation-timing-function: cubic-bezier(0.33333, 0, 0.66667, 0.33333) }
 100% {
   transform: scale(1) translateX(-370%) translateY(120%);
 } 
`;
const moveAnimation1 = keyframes`
 0% {
    transform: scale(1)
 }
 30%{
    transform: scale(1.7)
 }
 50% { 
     transform: translateX(75%)
     animation-timing-function: cubic-bezier(0.33333, 0, 0.66667, 0.33333) }
 100% {
   transform: scale(1) translateX(-180%) translateY(20%);
 } 
`;
const PrevCommitBox = styled.div`
    animation-name: ${({ clicked, index }) =>
        clicked && index === 0
            ? css`
                  ${moveAnimation0};
              `
            : clicked && index === 1
            ? css`
                  ${moveAnimation1};
              `
            : null};
    animation-duration: 2s;
    animation-iteraion-count: infinite;
    animation-fill-mode: forwards;
`;
const PrevCommit = styled.img`
    width: 68px;
    height: 68px;
    margin-top: 25px;
`;
const PrevCommitName = styled.div`
    font-size: 10px;
    color: #332820;
    margin-top: 8px;
    text-align: center;
`;

const PushBox = styled.div`
    padding: 5rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const moveAnimation = keyframes`
 0% {
    transform: scale(1)
 }
 30%{
    transform: scale(1.7)
 }
 50% { 
     transform: translateX(125%)
     animation-timing-function: cubic-bezier(0.33333, 0, 0.66667, 0.33333) }
 100% {
   transform: scale(1) translateX(256%) translateY(50%);
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
    font-size: 14px;
    /* font-weight: 800; */
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
    cursor: pointer;
    margin-top: -20px;
    margin-left: 30px;
`;

const GitPush = ({ name }) => {
    const [complete, setComplete] = useState(false);

    const getData = async () => {
        const newData = await db.getTestData();
        setData(curData.concat(newData));
    };

    const [curLog, setCurLog] = useState([]);
    const gitLogNotPushed = async () => {
        const newLog = await db.gitLog();
        setCurLog(newLog.slice(0, 2));
        console.log(newLog);
    };

    // 최초 렌더링 이후에 실행하기 위해 useEffect 내부에서 함수 실행
    useEffect(() => {
        gitLogNotPushed();
        getData();
    }, []);

    const gitPush = async () => {
        await db.gitPush();
    };

    const [clicked, setClicked] = useState(false);
    const toggleClicked = () => setClicked((value) => !value);

    return (
        <Wrapper>
            <ContentBox>
                <PushBox>
                    <CommitBox clicked={clicked} onClick={toggleClicked}>
                        <CommitImg src={commit}></CommitImg>
                        <CommitName>{name}</CommitName>
                    </CommitBox>
                    <HomeImg src={home}></HomeImg>
                </PushBox>
                <AddButton
                    onClick={() => {
                        toggleClicked();
                        setComplete(true);
                        gitPush();
                        setTimeout(() => window.open("https://dotori-2021.web.app/", "_blank"), 3000); //5초 딜레이
                    }}
                    style={{ backgroundColor: `${complete ? " #e5e5e5" : "#755e4c"}` }}
                >
                    도토리 내 집에 보관하기
                </AddButton>
            </ContentBox>
            <PrevCommitsContainer>
                {curLog.map((log, i) => {
                    return (
                        <PrevCommitBox clicked={clicked} onClick={toggleClicked} index={i}>
                            <PrevCommit src={commit}></PrevCommit>
                            <PrevCommitName>{log.name}</PrevCommitName>
                        </PrevCommitBox>
                    );
                })}
            </PrevCommitsContainer>
        </Wrapper>
    );
};

export default GitPush;
