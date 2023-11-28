import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import recipeApi from "../../api/recipeApi";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
  overflow: hidden;
`;

const Slider = styled.ul`
  display: flex;
  list-style: none;
  transition: transform 0.3s ease-in-out;
`;

const SlideItem = styled.li`
  background-color: white;
  box-shadow: 1px 1px 5px black;
  display: flex;
  flex-direction: column;
  height: 320px;
  margin: 0 12px 40px 0;
  padding: 15px 24px;
  max-width: 300px;
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

const RecipeRankSlider = () => {
  const [rankList, setRankList] = useState([]);
  const [recipeInfoList, setRecipeInfoList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % rankList.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + rankList.length) % rankList.length);
  };

  return (
    <>
    <div>조회수 1위부터 10위까지의 레시피 입니다.</div>
      <Container>
        <Slider style={{ transform: `translateX(-${currentIndex * 300}px)` }}>
          {rankList.map((recipe, index) => (
            <StyledLink key={index} to={`/recipe/${recipe.foodId}`}>
              <SlideItem>
                <CardItemImage src={recipeInfoList[index]?.thumbImg} alt={recipeInfoList[index]?.name} />
                <CardItemHeader>{recipeInfoList[index]?.name}</CardItemHeader>
              </SlideItem>
            </StyledLink>
          ))}
        </Slider>
      </Container>
      <div>
        <button onClick={prevSlide}>이전</button>
        <button onClick={nextSlide}>다음</button>
      </div>
    </>
  );
};

export default RecipeRankSlider;
