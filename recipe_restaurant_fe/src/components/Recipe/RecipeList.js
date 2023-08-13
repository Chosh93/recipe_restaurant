import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import recipeApi from "../../api/recipeApi";
import { Link } from "react-router-dom";

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
    padding: 15px 24px;
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

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black; 
    &:hover {
        color: black; 
    }
`;

const RecipeList = () => {
    const [recipeList, setRecipeList] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await recipeApi.getRecipeListInfo();
                setRecipeList(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData(); 
    }, []);

    return (
        <>
        <div>총 <b>{recipeList.length}</b>개의 레시피가 있습니다.</div>
        <Container>
            {recipeList.map((recipe, index) => (
                <div key={index}>
                    <StyledLink to={`/recipe/${recipe.foodId}`}>
                        <CardView>
                            <CardItemImage imagePath={recipe.thumbImg} />
                            <CardItemHeader>{recipe.name}</CardItemHeader>
                        </CardView>
                    </StyledLink>
                </div>
            ))}
        </Container>
    </>
    );
};

export default RecipeList;