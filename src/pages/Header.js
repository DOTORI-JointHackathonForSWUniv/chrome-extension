import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import log from "../assets/log.png";
import log_dotori from "../assets/log_dotori.png";
import styled from "styled-components";

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
`;
const Log = styled.div`
    padding: 1rem 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: solid 0.5px #e5e5e5;
`;
const LogIcon = styled.img`
    width: 32px;
    height: 32px;
`;
const LogText = styled.div`
    font-size: 11px;
    color: #332820;
    padding-left: 5px;
`;

const Header = () => {
    const [openLog, setLog] = useState(false);
    return (
        <Wrapper>
            <DotoriLogoImg src={logo}></DotoriLogoImg>
            <div onClick={() => setLog(!openLog)}>
                <LogImg src={log}></LogImg>
            </div>
            {openLog ? (
                <LogBox>
                    <Log>
                        <LogIcon src={log_dotori}></LogIcon>
                        <LogText>겨울에 먹을 비상 도토리</LogText>
                    </Log>
                </LogBox>
            ) : null}
        </Wrapper>
    );
};

export default Header;
