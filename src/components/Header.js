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
const LogIconWrapper = styled.div`
    cursor: pointer;
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
    overflow: scroll;
`;
const LogBoxEmpty = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #888;
`;
const Log = styled.div`
    width: 80%;
    padding: 0.8rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-bottom: solid 0.5px #e5e5e5;
`;
const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
const LogName = styled.div`
    font-family: NanumGothic;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: normal;
    text-align: left;
    color: #332820;
`;
const LogDate = styled.div`
    width: 100%;
    margin: 4px 4px 1px 4px;
    font-family: NanumGothic;
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: normal;
    text-align: left;
    color: #959595;
`;
const LogReset = styled.img`
    width: 25px;
    height: 23px;
    cursor: pointer;
`;

const Header = () => {
    const [openLog, setLog] = useState(false);
    const [curLog, setCurLog] = useState([]);

    const gitLogNotPushed = async () => {
        const newLog = await db.gitLogNotPushed();
        setCurLog(newLog);
    };

    const changeOpenLog = async () => {
        if (!openLog) {
            await gitLogNotPushed();
        }
        setLog(!openLog);
    };

    const getPrittyNum = (num) => {
        return num < 10 ? "0" + num.toString() : num.toString();
    };

    const resetLog = async (id) => {
        db.gitReset(id).then(() => {
            db.gitLogNotPushed().then((newLog) => {
                setCurLog(newLog);
            });
        });
    };

    return (
        <Wrapper>
            <DotoriLogoImg src={logo}></DotoriLogoImg>
            <LogIconWrapper onClick={changeOpenLog}>
                <LogImg src={log}></LogImg>
            </LogIconWrapper>
            {openLog ? (
                <LogBox>
                    {curLog.length > 0 ? (
                        curLog.map((log, index) => {
                            if (log !== undefined) {
                                const date = log.created_at.toDate();
                                const month = getPrittyNum(date.getMonth() + 1);
                                const day = getPrittyNum(date.getDay());
                                const hour = getPrittyNum(date.getHours());
                                const minute = getPrittyNum(date.getMinutes());
                                return (
                                    <Log key={index}>
                                        <Row>
                                            <LogName>{log.name}</LogName>
                                            <LogReset src={back} onClick={() => resetLog(log.id)}></LogReset>
                                        </Row>
                                        <LogDate>
                                            2021/{month}/{day} {hour}:{minute}
                                        </LogDate>
                                    </Log>
                                );
                            }
                        })
                    ) : (
                        <LogBoxEmpty>모두 집에 들어갔어요!</LogBoxEmpty>
                    )}
                </LogBox>
            ) : null}
        </Wrapper>
    );
};

export default Header;
