import axios from "axios";

const DOMAIN = "http://localhost:8111";

const recipeApi = {

    // 레시피 리스트 조회
    getRecipeListInfo : async() => {
        return await axios.get(DOMAIN + "/recipes/recipesListInfo");
    },

    getRecipeInfo : async(foodId) => {
        return await axios.get(DOMAIN + "/recipes/"+ foodId);
    },

    getRecipeStepTextInfo : async(foodId) => {
        return await axios.get(DOMAIN + "/recipes/steptext/" + foodId);
    },

    getRecipeStepImgInfo : async(foodId) => {
        return await axios.get(DOMAIN + "/recipes/stepimg/" + foodId);
    },

    getRecipeListSearch : async(foodName) => {
        console.log(foodName);
        return await axios.get(DOMAIN + "/recipes/search/" + foodName);
    }
}

export default recipeApi;