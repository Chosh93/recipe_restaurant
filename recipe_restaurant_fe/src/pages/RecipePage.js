import React, { useState } from "react";
import RecipeList from "../components/recipe/RecipeList";
import RecipeSearchBar from "../components/recipe/RecipeSearchBar";
import RecipeRank from "../components/recipe/RecipeRank";

const RecipePage = () => {
    const [searchResults, setSearchResults] = useState([]);
    console.log(searchResults);
    const handleSearch = (results) => {
      setSearchResults(results);
    };

    return (
        <>
          <RecipeSearchBar onSearch={handleSearch} />
          <RecipeRank/>
          <RecipeList searchResults={searchResults} />
        </>
    )
}
export default RecipePage;