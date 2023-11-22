import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import badal from "../../images/badal.jpg"

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: ${props => props.color || '#333'};
    height: 50vh;
    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        width: 90%;
    }
`;

const Button = styled(Link)`
    text-decoration: none;
    color: ${props => props.textColor || 'black'};
    font-size: ${props => props.fontSize || '1.2rem'};
    display: flex; /* Add display: flex */
    align-items: center;
    justify-content: center;
    &:hover {
        background: #aaa;
    }
`;

const RecipeButton = styled(Button)`
    background: #4CAF50; /* 레시피 구역 배경색 */
    height: 100%;
    width: 50%;
    
`;

const RestaurantButton = styled(Button)`
    background: url(${badal});
    background-size: cover;
    background-repeat: no-repeat; /* Ensure the background image doesn't repeat */
    background-position: center; /* Center the background image */
    height: 100%;
    width: 50%;
    transition: background 0s;

    &:hover {
        background: url(${badal});
        background-size: cover; /* Retain the cover size on hover */
    }
`;

export { Container, Button };

const CommonNavbar = () => {
    return (
        <Container>
            <RecipeButton to="/recipe">레시피</RecipeButton>
            <RestaurantButton to="/restaurant">음식점</RestaurantButton>
        </Container>
    );
};

export default CommonNavbar;
