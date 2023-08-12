package com.example.recipe_restaurant.controller;

import com.example.recipe_restaurant.entity.Recipes;
import com.example.recipe_restaurant.service.RecipesService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/recipes")
public class RecipesController {
    @Autowired
    private RecipesService recipesService;

    @GetMapping("/recipesInfo")
    public ResponseEntity<List<Recipes>> getAllRecipeInfo() {
        List<Recipes> recipesList = recipesService.getAllRecipes();
        return new ResponseEntity<>(recipesList, HttpStatus.OK);
    }
}
