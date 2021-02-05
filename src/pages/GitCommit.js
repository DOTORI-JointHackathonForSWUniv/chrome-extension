import React, { useEffect, useState } from "react";
import commit from "../assets/commit.png";
import styled from "styled-components";
import * as db from "../apis/firebase";

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

const GitCommit = ({ setPage }) => {
  const [inputName, setInputName] = useState("");
  const [isTyping, setTyping] = useState(false);
  const [complete, setComplete] = useState(false);
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

  return (
    <div>
      <CommitBox>
        {complete ? null : (
          <CommitText>주머니 이름 정해줘~ 먹을 때 찾기 편하게 :)</CommitText>
        )}
        <CommitImg src={commit}></CommitImg>
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
          setTyping(false);
          setComplete(true);
          gitCommit();
          setTimeout(() => setPage("push"), 3000); //5초 딜레이
        }}
        style={{ backgroundColor: `${isTyping ? " #2ed37e" : "#e5e5e5"}` }}
      >
        주머니 이름 정하기
      </AddButton>
    </div>
  );
};

export default GitCommit;
