package com.example.recipe_restaurant.service;

import com.example.recipe_restaurant.entity.RecipeRank;
import com.example.recipe_restaurant.entity.Recipes;
import com.example.recipe_restaurant.entity.RecipesStepImgurl;
import com.example.recipe_restaurant.entity.RecipesStepText;
import com.example.recipe_restaurant.repository.RecipeRankRepository;
import com.example.recipe_restaurant.repository.RecipeStepImgRepository;
import com.example.recipe_restaurant.repository.RecipeStepTextRepository;
import com.example.recipe_restaurant.repository.RecipesRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;


@Transactional
@Service
@Slf4j
public class RecipesService {

    private final RecipesRepository recipesRepository;
    private final RecipeStepTextRepository recipeStepTextRepository;
    private final RecipeStepImgRepository recipeStepImgRepository;
    private final RecipeRankRepository recipeRankRepository;

    public RecipesService(RecipesRepository recipesRepository, RecipeStepTextRepository recipeStepTextRepository, RecipeStepImgRepository recipeStepImgRepository, RecipeRankRepository recipeRankRepository) {
        this.recipesRepository = recipesRepository;
        this.recipeStepTextRepository = recipeStepTextRepository;
        this.recipeStepImgRepository = recipeStepImgRepository;
        this.recipeRankRepository = recipeRankRepository;
    }


    // 레시피 리스트 전체 조회
    public List<Recipes> getAllRecipes() {
        return recipesRepository.findAll();
    }

    // 특정 요리 레시피 조회(이름, 인트로, 재료, 썸네일)
    public Recipes getRecipeInfoById(String foodId) {
        return recipesRepository.findByFoodId(foodId).orElse(null);
    }

    // 특정 요리 조리 순서 텍스트 조회 (이름, 스텝번호, 스텝설명)
    public List<RecipesStepText> getRecipeStepText(String foodId){
        List<RecipesStepText> stepTextList = recipeStepTextRepository.findAllByFoodId(foodId);
        RecipeRank recipeRank = recipeRankRepository.findByFoodId(foodId).get();
        recipeRank.setViewCount(recipeRank.getViewCount() + 1);
        recipeRankRepository.save(recipeRank);
        return stepTextList;
    }

    // 특정 요리 조리 순서 이미지 조회 (이름, 스텝번호, 스텝설명)
    public List<RecipesStepImgurl> getRecipeStepImg(String foodId){
        List<RecipesStepImgurl> stepImgList = recipeStepImgRepository.findAllByFoodId(foodId);
        return stepImgList;
    }

    // 특정 키워드를 포함하는 요리 리스트 조회
    public List<Recipes> getSearchRecipes(String keyword){
        List<Recipes> recipes = recipesRepository.findAll();
        List<Recipes> matchRecipes = new ArrayList<>();
        for(Recipes recipe : recipes){
            if(recipe.getName().contains(keyword)){
                matchRecipes.add(recipe);
            }
        }
        return matchRecipes;
    }

    // 조회수 요리 리스트 조회
    public List<RecipeRank> getRecipeRank(){
        List<RecipeRank> rankList = recipeRankRepository.findAllByOrderByViewCountDesc();
        return rankList;
    }

    // 조회수 증가
    public void increaseViewCount(String foodId){
        RecipeRank recipeRank = recipeRankRepository.findByFoodId(foodId)
                .orElseThrow(() -> new EntityNotFoundException("RecipeRank not found with foodId: " + foodId));
        recipeRank.setViewCount(recipeRank.getViewCount() + 1);
        System.out.println("==================== 증가가 완료되었습니다.====================");
        recipeRankRepository.save(recipeRank);
    }
}
