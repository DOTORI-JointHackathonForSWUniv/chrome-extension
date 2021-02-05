import React from "react";

import * as db from "../apis/firebase";
import { useState, useEffect } from "react";

function FirebaseTest() {
  const [curData, setData] = useState([]);

  const getData = async () => {
    const newData = await db.getTestData();
    setData(curData.concat(newData));
  };

  // 최초 렌더링 이후에 실행하기 위해 useEffect 내부에서 함수 실행
  useEffect(() => {
    getData();
  }, []);

  const gitAdd = async () => {
    await db.gitAdd({ code1: "temp code!", code2: "testing!" }, true);
  };

  const gitCommit = async () => {
    await db.gitCommit("이름 없는 커밋");
  };

  const gitPush = async () => {
    await db.gitPush();
  };

  return curData.length > 0 ? (
    <div>
      <button onClick={gitAdd}>Git Add Test</button>
      <button onClick={gitCommit}>Git Commit Test</button>
      <button onClick={gitPush}>Git Push Test</button>
      {curData.map((data, index) => {
        return (
          <div key={index}>
            id: {data.id}, value: {data.value}
          </div>
        );
      })}
    </div>
  ) : (
    <div />
  );
}

export default FirebaseTest;
