import React from "react";

import * as db from "../apis/firebase";
import { useState, useCallback, useEffect } from "react";

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

  return curData.length > 0 ? (
    <div>
      {curData.map((data, index) => {
        return (
          <div key={index}>
            id: {data.id}, value: {data.value}{" "}
          </div>
        );
      })}
    </div>
  ) : (
    <div />
  );
}

export default FirebaseTest;
