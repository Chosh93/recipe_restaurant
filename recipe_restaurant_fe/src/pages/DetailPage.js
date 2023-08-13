import React from "react";
import RecipeStep from "../components/detail/RecipeStep";
import Intro from "../components/detail/Intro";
import Ingredients from "../components/detail/Ingredients";
import { styled } from "styled-components";

const Container = styled.div`
    box-sizing: border-box;
    border: 1px solid #e6e7e8;
    padding: 0 0 20px 0;
    background: #fff;
`;
const Blank_bottom = styled.div`
    background: #f1f1f2;
    height: 10px;
    border-top: 1px solid #e6e7e8;
    border-bottom: 1px solid #e6e7e8;
    clear: both;
`;

const DetailPage = () => {

    return (
        <Container>
            <Intro />
            <Blank_bottom/>
            <Ingredients />
            <Blank_bottom/>
            <RecipeStep />
        </Container>
    )
}

export default DetailPage;