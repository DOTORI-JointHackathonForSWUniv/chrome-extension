import React, { useEffect, useState } from "react";
import commit from "../assets/commit.png";
import reset from "../assets/reset.png";
import styled, { keyframes, css } from "styled-components";
import Header from "../components/Header";
import * as db from "../apis/firebase";

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
  margin-top: -20px;
`;
const CommitInput = styled.input`
  width: 255px;
  height: 44px;
  font-weight: bold;
  border: solid 1px #707070;
  margin-top: 16px;
  text-align: center;
`;
const CommitName = styled.div`
  font-size: 16px;
  font-weight: 800;
  color: #332820;
  height: 19px;
  margin-bottom: -20px;
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
`;

//이전 커밋 내용 로그에 보이기!
const GitCommit = ({ setPage, setName }) => {
  const [inputName, setInputName] = useState("");
  const [isTyping, setTyping] = useState(false);
  const [complete, setComplete] = useState("start");
  const toggleCompleted = (status) => {
    console.log("clicked");
    setComplete(status);
  };

  const gitCommit = async () => {
    setName(inputName);
    await db.gitCommit(inputName);
  };

  return (
    <div>
      <CommitBox complete={complete}>
        <CommitImg src={commit} complete={complete}></CommitImg>
        {complete === "doing" ? (
          <CommitText>주머니 이름 정해줘~ 먹을 때 찾기 편하게 :)</CommitText>
        ) : null}
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
    </div>
  );
};

export default GitCommit;
