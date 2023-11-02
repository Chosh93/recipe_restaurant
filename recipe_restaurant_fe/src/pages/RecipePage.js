import React, { useState } from "react";
import RecipeList from "../components/Recipe/RecipeList";
import Header from "../components/common/Header";
import RecipeSearchBar from "../components/Recipe/RecipeSearchBar";

const RecipePage = () => {
    const [searchResults, setSearchResults] = useState([]);
    console.log(searchResults);
    const handleSearch = (results) => {
      setSearchResults(results);
    };
    return (
        <>
          <RecipeSearchBar onSearch={handleSearch} />
          <RecipeList searchResults={searchResults} />
        </>
    )
}
export default RecipePage;