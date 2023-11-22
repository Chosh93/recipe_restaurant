import React from "react";
import styled from "styled-components";
import Logo from "./logo";

const HeaderPosition = styled.div`
    position: sticky;
    top: 0;
    z-index: 2;
    margin-bottom: 3rem;
`;

const HeaderStyle = styled.div`
    margin-bottom: 1rem;
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.95) 35%,
    rgba(255, 255, 255, 0.9) 40%,
    rgba(255, 255, 255, 0.85) 50%,
    rgba(255, 255, 255, 0.8) 60%,
    rgba(255, 255, 255, 0.75) 65%,
    rgba(255, 255, 255, 0.7) 70%,
    rgba(255, 255, 255, 0.65) 75%,
    rgba(255, 255, 255, 0.6) 80%,
    rgba(255, 255, 255, 0.55) 85%,
    rgba(255, 255, 255, 0.4) 90%,
    rgba(255, 255, 255, 0.2) 95%,
    rgba(255, 255, 255, 0) 100%

);

`;

const LogoContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    .icons{
        float: right;
        margin-top: 0.5rem;
        margin-right: 2rem;
    }
    .logo {
        float: left;
        margin-left: 1rem;
    }

    @media (max-width: 768px) {
        justify-content: space-between;
        .icons{
            margin-right: 0;
        }

    }

`;

const Header = () => {
    return(
        <HeaderPosition>
        <HeaderStyle>
        <LogoContainer>
            <div className="logo"><Logo/></div>
        </LogoContainer>
        </HeaderStyle>
        </HeaderPosition>
    );
}

export default Header;