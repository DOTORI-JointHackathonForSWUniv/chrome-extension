import React, { useEffect } from "react";
import dotori from "../assets/dotori.png";
import basket from "../assets/basket.png";
import logo from "../assets/logo.png";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 19px 25px 58px 22px;
    background-color: #ffffff;
    border-style: solid;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Header = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;
const DotoriLogoImg = styled.img`
    width: 102px;
    height: 37px;
`;
const LogImg = styled.img``;

const TextBox = styled.span`
    display: flex;
    flex-direction: row;
`;

const AddText = styled.div`
    font-size: 15px;
    color: #d2d2d2;
    margin: 0 30px;
`;

const Triangle = styled.text`
    width: 10px;
    height: 9px;
    margin: 0 92px 11px 32px;
    border: solid 1px #2ed37e;
    color: #2ed37e;
`;

const ImgBox = styled.div`
    padding: 5rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const DotoriImg = styled.img`
    width: 113px;
    height: 113px;
`;
const BasketImg = styled.img`
    width: 215px;
    height: 215px;
    margin-left: 8rem;
`;

const AddButton = styled.button`
    width: 460px;
    height: 70px;
    border-radius: 5px;
    background-color: #755e4c;
    text-align: center;
    color: #ffffff;
    font-size: 20px;
`;

const GitAdd = ({ history }) => {
    const moveMain = () => {
        history.push("/");
    };

    return (
        <Wrapper>
            <Header>
                <DotoriLogoImg src={logo}></DotoriLogoImg>
            </Header>
            <TextBox>
                <AddText>도토리 넣기</AddText>
                <AddText>주머니 이름 정하기</AddText>
                <AddText>도토리 보관하기</AddText>
            </TextBox>
            <ImgBox>
                <DotoriImg src={dotori}></DotoriImg>
                <BasketImg src={basket}></BasketImg>
            </ImgBox>
            <AddButton>주머니에 내가 만든 도토리 넣기</AddButton>
        </Wrapper>
    );
};

export default GitAdd;
