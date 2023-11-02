import styled from "styled-components"
import React, { useState } from "react";
import recipeApi from "../../api/recipeApi";
import {MdSearch} from "react-icons/md"

const SearchContainer = styled.div`
    position: relative;
    top: 5%;
    border: 0.2rem solid #333;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    height: 40px;
    text-align: center;
    display: flex;
    z-index: 1;
    background-color: white;
    @media (max-width: 768px) {
        width: 70%;
        top: 0%;  
    }
    @media (max-width: 420px) {
        
        height: 30px;
  }
`;
const Input = styled.input`
    width: 80%;
    height: 90%;
    border: none;
    border-style: none;
    outline: none;
    position: absolute;
    left : 20px;
    font-size: 20px;
    @media (max-width: 768px) {
        font-size: 14px;
      
    }
`;

const SearchButton = styled(MdSearch)`
    width : 30px;
    height: 30px;
    position: absolute;
    right: 10px;
    cursor: pointer;
    @media (max-width: 420px) {
        width: 20px;
        height: 20px;
    }
`

const RecipeSearchBar = ({ onSearch }) => {
    const [keyword, setKeyword] = useState("");

    const onChangeKeyword = (e) => {
        const value = e.target.value;
        setKeyword(value);
    }

    const onClickSearch = async() => {
        try {
            const response = await recipeApi.getRecipeListSearch(keyword);
            onSearch(response.data); // 검색 결과를 상위 컴포넌트로 전달
        } catch (error) {
            console.log(error);
        }
    }

    // Enter 키를 누르면 검색 실행
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClickSearch();
        }
    }

    return (
        <SearchContainer>
                <Input
                    placeholder="음식을 검색하세요!"
                    value={keyword}
                    onChange={onChangeKeyword}
                    onKeyPress={handleKeyPress}
                />
                <MdSearch onClick={onClickSearch} />
        </SearchContainer>
    );
}

export default RecipeSearchBar;