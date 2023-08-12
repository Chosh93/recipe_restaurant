import axios from "axios";

const DOMAIN = "http://localhost:8111";

const recipeApi = {

    // 레시피 조회
    getRecipeInfo : async() => {
        return await axios.get(DOMAIN + "/recipes/recipesInfo");
    } 
}

export default recipeApi;