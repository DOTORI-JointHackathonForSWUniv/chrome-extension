import React from "react";
import db from "../config/firebase.js";
import { useState, useCallback, useEffect } from "react";

function FirebaseTest() {
  const [curData, setData] = useState([]);

  const getData = async () => {
    let newData = [];
    const querySnapshot = await db.collection("test-collection").get();

    querySnapshot.forEach((doc) => {
      const value = doc.data().value ?? doc.data().dotori;
      const id = doc.id;
      newData.push({ value: value, id: id });
    });

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
