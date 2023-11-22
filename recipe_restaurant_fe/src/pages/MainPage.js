import React from "react";
import Header from "../components/header/Header";
import CommonNavbar from "../components/common/CommonNavbar";
import styled from "styled-components";

const MainContainer = styled.div`
    margin: 0 auto;
    font-family: 'Pretendard';
`

const HeaderStyle = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
`

const MainPage = () => {
    return (
        <MainContainer>
            <HeaderStyle>
                <Header/>
            </HeaderStyle>
            <CommonNavbar/>
        </MainContainer>
    )
    // return (
    //     <>
    //     <Header />
    //     </>
    // )
}

export default MainPage;