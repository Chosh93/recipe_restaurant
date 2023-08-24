import React from "react";
import { Box } from "./CommonNavbar";
import { styled } from "styled-components";
import SearchBox from "../SearchBox";
import Logo from "../../images/KakaoTalk_20230824_002809865.png";

const Img = styled.img`
    width: 220px;
    height: 65px;
`

const Header = () => {
    return (
        <Box>
            <Img src={Logo} alt="로고 이미지" />
            <SearchBox/>
        </Box>
    )
}

export default Header;