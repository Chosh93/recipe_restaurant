import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { styled } from "styled-components";
import recipeApi from "../../api/recipeApi";

const Container = styled.div`
    display: grid;
    margin-top: 10px;
    align-content: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 300px);
    gap: 1rem;
`;

const CardView = styled.div`
    background-color: white;
    box-shadow: 1px 1px 5px black;
    display: flex;
    flex-direction: column;
    height: 320px;
    padding: 0 24px;
`;

const CardItemHeader = styled.div`
    font-size: 1.0rem;
    text-align: center;
    padding: 10px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const CardItemImage = styled.div`
    background-size: cover;
    height: 60%;
    background-image: url(${props => props.imagePath});
`;

const Popular = () => {
    const [recipeList, setRecipeList] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await recipeApi.getRecipeInfo();
                setRecipeList(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData(); // fetchData 함수를 호출하여 데이터를 가져옴
    }, []);

    return (
        <>
        <div>총 <b>{recipeList.length}</b>개의 레시피가 있습니다.</div>
        <Container>
            {recipeList.map((recipe, index) => (
                <CardView key={index}>
                    <CardItemImage imagePath={recipe.thumbImg} />
                    <CardItemHeader>{recipe.name}</CardItemHeader>
                </CardView>
            ))}
        </Container>
        </>
    );
};

export default Popular;