import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import log from "../assets/log.png";
import back from "../assets/back.png";
import styled from "styled-components";
import * as db from "../apis/firebase";

const Wrapper = styled.div`
    padding-top: 19px;
    width: 100%;
`;
const DotoriLogoImg = styled.img`
    width: 102px;
    height: 37px;
    padding-left: 22px;
    float: left;
`;
const LogImg = styled.img`
    padding-right: 22px;
    width: 28px;
    height: 27px;
    float: right;
`;
const LogBox = styled.div`
    width: 219px;
    height: 322px;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 60px;
    right: 25px;
    z-index: 2;
`;
const Log = styled.div`
    padding: 1rem 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: solid 0.5px #e5e5e5;
`;
const LogNum = styled.div`
    color: #755e4c;
    font-weight: bold;
    font-size: 13px;
`;
const LogText = styled.div`
    font-size: 11px;
    color: #332820;
    padding: 0 15px;
`;
const LogReset = styled.img`
    width: 23px;
    height: 22px;
`;

const Header = () => {
    const [openLog, setLog] = useState(false);
    const [curData, setData] = useState([]);
    const [curLog, setCurLog] = useState([]);

    const getData = async () => {
        const newData = await db.getTestData();
        setData(curData.concat(newData));
    };

    // 최초 렌더링 이후에 실행하기 위해 useEffect 내부에서 함수 실행
    useEffect(() => {
        getData();
        gitLogNotPushed();
    }, []);

    // const gitLog = async () => {
    //     const newLog = await db.gitLog();
    //     setCurLog(curLog.concat(newLog));
    // };

    const gitLogNotPushed = async () => {
        const newLog = await db.gitLog();
        setCurLog(newLog);
    };

    return (
        <Wrapper>
            <DotoriLogoImg src={logo}></DotoriLogoImg>
            <div
                onClick={() => {
                    //gitLogNotPushed();
                    setLog(!openLog);
                }}
            >
                <LogImg src={log}></LogImg>
            </div>

            {/* {openLog ? (
                <LogBox>
                    <Log>
                        {/* <LogNum>1</LogNum>
                        <LogText>겨울에 먹을 비상 도토리</LogText>
                        <LogReset src={back}></LogReset> */}
            {/* 
                {curLog.map((log, index) => {
                const date = log.created_at.toDate();
                return (
                <LogText key={index}>
                    {log.name}, {date.getMonth()+1}월 {date.getDay()}일 {date.getHours()}:
                    {date.getMinutes()}
                </LogText>
                
                );
            })}
            <LogReset src={back}></LogReset>
                    </Log>
                </LogBox>
            ) : null} */}

            {openLog ? (
                <div>
                    {curLog.map((log, index) => {
                        const date = log.created_at.toDate();
                        return (
                            <LogBox>
                                <Log>
                                    <LogText key={index}>
                                        {log.name}, {date.getMonth() + 1}월 {date.getDay()}일 {date.getHours()}:{date.getMinutes()}
                                    </LogText>
                                    <LogReset src={back}></LogReset>
                                </Log>
                            </LogBox>
                        );
                    })}
                </div>
            ) : null}
        </Wrapper>
    );
};

export default Header;
