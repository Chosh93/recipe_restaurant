// CommonNavbar.js
import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props => props.color || '#333'};
    padding: 1rem;
    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 90%;
    }
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Button = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    &:hover {
        background: #aaa;
    }
`;

const NaviButton = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 2rem;
    padding: 0.5rem 1rem;
    &:hover {
        backgrount: #aaa;
    }
`

export { Container, Button };

const CommonNavbar = () => {
    return (
        <Container>
            <Menu>
                <NaviButton to="/recipe">레시피</NaviButton>
                <NaviButton to="/restaurant">음식점</NaviButton>
            </Menu>
        </Container>
    );
};

export default CommonNavbar;
