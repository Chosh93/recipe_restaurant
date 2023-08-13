import React, { useState, useEffect } from "react";
import RecipeStep from "../components/detail/RecipeStep";
import Intro from "../components/detail/Intro";
import Ingredients from "../components/detail/Ingredients";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import recipeApi from "../api/recipeApi";

const Container = styled.div`
    width: 70%;
    margin: 0 auto;
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

const RecipeDetailPage = () => {
    const { foodId } = useParams(); // 라우트 매개변수에서 foodId를 가져옴
    const [recipeData, setRecipeData] = useState([]);
    const [stepTextData, setStepTextData] = useState([]);
    const [stepImgData, setStepImgData] = useState([]);

    useEffect(() => {
        const fetchRecipeData = async () => {
            try {
                const response = await recipeApi.getRecipeInfo(foodId);
                setRecipeData(response.data);
                const response2 = await recipeApi.getRecipeStepTextInfo(foodId);
                setStepTextData(response2.data);
                const response3 = await recipeApi.getRecipeStepImgInfo(foodId);
                setStepImgData(response3.data);
                console.log(response);
                console.log(response2);
            } catch (error) {
                console.log(error);
            }
        };

        fetchRecipeData(); // fetchData 함수를 호출하여 데이터를 가져옴
    }, []); // foodId가 변경될 때마다 다시 불러옴

    return (
        <Container>
            <Intro recipeData={recipeData}/>
            <Blank_bottom/>
            <Ingredients recipeData={recipeData}/>
            <Blank_bottom/>
            <RecipeStep stepTextData={stepTextData} stepImgData={stepImgData}/>
            <Blank_bottom/>
        </Container>
    )
}

export default RecipeDetailPage;