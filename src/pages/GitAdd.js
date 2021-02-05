import React, { useEffect } from "react";
import dotori from "../assets/dotori.png";
import basket from "../assets/basket.png";
import logo from "../assets/logo.png";
import styled from "styled-components";
//test
const Wrapper = styled.div`
    width: 800px;
    height: 600px;
    padding: 19px 25px 58px 22px;
    background-color: #ffffff;
    border-style: solid;
`;

const DotoriImg = styled.img`
    width: 113px;
    height: 113px;
    margin: 155px 151px 89px 46px;
    border-radius: 6px;
`;

const BasketImg = styled.img`
    width: 215px;
    height: 215px;
    margin: 78px 98px 64px 151px;
`;

const DotoriLogoImg = styled.img`
    width: 102px;
    height: 37px;
    margin: 0 46px 22px 0;
`;

const LogoImage = styled.img`
    width: 102px;
    height: 37px;
    margin: 0 46px 22px 0;
`;

const AddButton = styled.button`
    width: 460px;
    height: 70px;
    margin: 64px 117px 0 46px;
    padding: 24px 96px 23px 96px;
    border-radius: 5px;
    background-color: #755e4c;
    font-family: NanumGothic;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.15;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
`;

const AddText1 = styled.text`
    width: 74px;
    height: 17px;
    margin: 11px 60px 0 0;
    font-family: NanumGothic;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: normal;
    text-align: center;
    color: #2ed37e;
`;

const AddText2 = styled.text`
    width: 122px;
    height: 17px;
    margin: 11px 60px 0;
    font-family: NanumGothic;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: normal;
    text-align: center;
    color: #d2d2d2;
`;

const AddText3 = styled.text`
    width: 102px;
    height: 17px;
    margin: 11px 0 0 60px;
    font-family: NanumGothic;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: normal;
    text-align: center;
    color: #d2d2d2;
`;

const Triangle = styled.text`
    width: 10px;
    height: 9px;
    margin: 0 92px 11px 32px;
    border: solid 1px #2ed37e;
    color: #2ed37e;
`;

const GitAdd = ({history}) => {
    const moveMain = () => {
        history.push('/');
    };

    return(
        <Wrapper>
        
            <DotoriLogoImg src={logo}></DotoriLogoImg>
            {/* <Triangle>▼</Triangle> */}
            <AddText1>도토리 넣기</AddText1>
            
            <AddText2>주머니 이름 정하기</AddText2>
            <AddText3>도토리 보관하기</AddText3>

            <DotoriImg src={dotori}></DotoriImg>
            
            <BasketImg src={basket}></BasketImg>
            
            <AddButton>주머니에 내가 만든 도토리 넣기</AddButton>
        </Wrapper>
    )
}

export default GitAdd;