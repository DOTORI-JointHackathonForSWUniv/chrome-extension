import React, { useEffect, useState } from "react";
import dotori from "../assets/dotori.png";
import basket from "../assets/basket.png";
import step from "../assets/step.png";
import styled, { keyframes, css } from "styled-components";
import Header from "../components/Header";
import * as db from "../apis/firebase";

const ImgBox = styled.div`
  padding: 5rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const moveAnimation = keyframes`
 0% {
  transform: translateX(0%) translateY(0%) rotate(0deg);
 }
 50% {
     transform: translateX(125%) translateY(-200%) rotate(0deg);
     animation-timing-function: cubic-bezier(0.33333, 0, 0.66667, 0.33333) }
 100% {
   transform: translateX(250%) translateY(0%) rotate(360deg);
 }
`;
const DotoriImg = styled.img`
  width: 113px;
  height: 113px;
  animation-name: ${({ clicked }) =>
    clicked
      ? css`
          ${moveAnimation};
        `
      : null};
  animation-duration: 1.5s;
  animation-iteraion-count: infinite;
  animation-fill-mode: forwards;
`;
const BasketImg = styled.img`
  width: 215px;
  height: 215px;
  margin-left: 8rem;
  z-index: 1;
`;

const AddButton = styled.button`
  border: none;
  width: 460px;
  height: 70px;
  border-radius: 5px;
  background-color: #755e4c;
  text-align: center;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
`;

const GitAdd = ({ setPage }) => {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((value) => !value);
  // const [clicked2, setClicked2] = useState(false);
  // const toggleClicked2 = () => setClicked2(value => !value);

  // const exportSourceEvent = () => {
  //   console.log("export click");

  //   chrome.tabs.getSelected((current_tab) => {
  //     const current_tab_id = current_tab.id;
  //     chrome.storage.local.set({ export_response_display: "" }, () => {});
  //     chrome.tabs.sendMessage(current_tab_id, {
  //       type: "export_request",
  //       source: "popup.js",
  //       destination: "contentScript.js",
  //     });
  //   });
  // };

  // useEffect(() => {
  //   chrome.storage.onChanged.addListener(async (changes, namespace) => {
  //     for (var key in changes) {
  //       var storageChange = changes[key];
  //       // console.log(
  //       //     'Storage key "%s" in namespace "%s" changed. ' +
  //       //         'Old value was "%s", new value is "%s".',
  //       //     key,
  //       //     namespace,
  //       //     storageChange.oldValue,
  //       //     storageChange.newValue
  //       // );

  //       if (key === "export_response_display") {
  //         // console.log("Success");
  //         // console.log(JSON.stringify(storageChange.newValue));
  //         await db.gitAdd(storageChange.newValue());
  //       }
  //     }
  //   });
  // }, []);

  return (
    <div>
      <ImgBox>
        <DotoriImg
          src={dotori}
          clicked={clicked}
          onClick={toggleClicked}
        ></DotoriImg>
        <BasketImg src={basket}></BasketImg>
      </ImgBox>
      <AddButton
        onClick={() => {
          toggleClicked();
          setTimeout(() => setPage("commit"), 2000); //5초 딜레이
          // exportSourceEvent();
          db.gitAdd("img_url");
        }}
      >
        주머니에 내가 만든 도토리 넣기
      </AddButton>
    </div>
  );
};
export default GitAdd;
