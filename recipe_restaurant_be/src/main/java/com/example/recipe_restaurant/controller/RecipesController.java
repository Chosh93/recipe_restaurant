package com.example.recipe_restaurant.controller;

import com.example.recipe_restaurant.entity.RecipesStepImgurl;
import com.example.recipe_restaurant.entity.RecipesStepText;
import com.example.recipe_restaurant.entity.Recipes;
import com.example.recipe_restaurant.service.RecipesService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/recipes")
public class RecipesController {
    @Autowired
    private RecipesService recipesService;

    // 레시피 리스트 조회
    @GetMapping("/recipesListInfo")
    public ResponseEntity<List<Recipes>> getAllRecipeInfo() {
        List<Recipes> recipesList = recipesService.getAllRecipes();
        return new ResponseEntity<>(recipesList, HttpStatus.OK);
    }

    // 특정레시피 정보 조회
    @GetMapping("/{foodId}")
    public ResponseEntity<Recipes> getRecipeInfo(@PathVariable String foodId) {
        Recipes recipeInfo = recipesService.getRecipeInfoById(foodId);
        return new ResponseEntity<>(recipeInfo, HttpStatus.OK);
    }

    @GetMapping("/steptext/{foodId}")
    public ResponseEntity<List<RecipesStepText>> getRecipeStepText(@PathVariable String foodId) {
        List<RecipesStepText> recipeStepTextList = recipesService.getRecipeStepText(foodId);
        return new ResponseEntity<>(recipeStepTextList, HttpStatus.OK);
    }

    @GetMapping("/stepimg/{foodId}")
    public ResponseEntity<List<RecipesStepImgurl>> getRecipeStepImg(@PathVariable String foodId) {
        List<RecipesStepImgurl> recipesStepImgurl = recipesService.getRecipeStepImg(foodId);
        return new ResponseEntity<>(recipesStepImgurl, HttpStatus.OK);
    }
}
