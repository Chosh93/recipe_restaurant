import axios from "axios";

const DOMAIN = "http://localhost:8111";

const recipeApi = {

    // 레시피 리스트 조회
    getRecipeListInfo : async() => {
        return await axios.get(DOMAIN + "/recipes/recipesListInfo");
    },

    // foodId로 레시피정보 조회
    getRecipeInfo : async(foodId) => {
        return await axios.get(DOMAIN + "/recipes/"+ foodId);
    },

    // foodId로 조리 순서 text 조회 
    getRecipeStepTextInfo : async(foodId) => {
        return await axios.get(DOMAIN + "/recipes/steptext/" + foodId);
    },

    // foodId로 조리 순서 img 조회 
    getRecipeStepImgInfo : async(foodId) => {
        return await axios.get(DOMAIN + "/recipes/stepimg/" + foodId);
    },

    // foodName으로 레시피 검색 
    getRecipeListSearch : async(foodName) => {
        return await axios.get(DOMAIN + "/recipes/search/" + foodName);
    },

    // 조회순 레시피 조회
    getRecipeRank : async() => {
        return await axios.get(DOMAIN + "/recipes/rank/");
    }
}

export default recipeApi;