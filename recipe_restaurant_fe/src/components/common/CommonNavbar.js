import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Box = styled.div`
    background: ${props => props.color || 'white'};
    padding: 1rem;
    display: flex;
    margin: 10px auto;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 90%;
    }
`;

const Button = styled.nav`
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
    &:hover {
        background: #aaa;
    }
`;

export { Box, Button }; // 명시적으로 내보내기

const CommonNavbar = () => {
    return (
        <Box>
            <Link to="/recipe"><Button>레시피</Button></Link>
            <Link to="/restaurant"><Button>음식점</Button></Link>
        </Box>
    )
};

export default CommonNavbar;
