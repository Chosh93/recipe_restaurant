import React, { useState, useEffect } from "react";
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

const CardItemImage = styled.img`
  object-fit: cover;
  height: 60%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: black;
  }
`;

const RecipeRank = () => {
  const [rankList, setRankList] = useState([]);
  const [recipeInfoList, setRecipeInfoList] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await recipeApi.getRecipeRank();
        setRankList(response.data.slice(0, 10));
  
        const promises = response.data.map((recipe) =>
          recipeApi.getRecipeInfo(recipe.foodId)
        );
        const detailedInfoList = await Promise.all(promises);
        setRecipeInfoList(detailedInfoList.map((response) => response.data));
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div>
      <Container>
        {rankList.map((recipe, index) => (
          <StyledLink key={index} to={`/recipe/${recipe.foodId}`}>
            <CardView>
              <CardItemImage src={recipeInfoList[index]?.thumbImg} alt={recipeInfoList[index]?.name} />
              <CardItemHeader>{recipeInfoList[index]?.name}</CardItemHeader>
            </CardView>
          </StyledLink>
        ))}
      </Container>
    </div>
  );
};

export default RecipeRank;
