import React, { useState, useEffect } from "react";
import RecipeRank from "../components/recipe/RecipeRank";
import RecipeSearchBar from "../components/recipe/RecipeSearchBar";
import RecipeNavBar from "../components/recipe/RecipeNavBar";

const RecipeRankPage = () => {
    const [searchResults, setSearchResults] = useState([]);
    console.log(searchResults);
    const handleSearch = (results) => {
      setSearchResults(results);
    };

  return (
    <>
        <RecipeNavBar/>
        <RecipeSearchBar onSearch={handleSearch} />
        <RecipeRank searchResults={searchResults} />
    </>
  );
};

export default RecipeRankPage;
