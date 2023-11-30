import React, { useState } from "react";
import RecipeList from "../components/recipe/RecipeList";
import RecipeSearchBar from "../components/recipe/RecipeSearchBar";
import RecipeNavBar from "../components/recipe/RecipeNavBar";

const RecipePage = () => {
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = (results) => {
      setSearchResults(results);
    };

    return (
        <>
          <RecipeNavBar/>
          <RecipeSearchBar onSearch={handleSearch} />
          <RecipeList searchResults={searchResults} />
        </>
    )
}
export default RecipePage;