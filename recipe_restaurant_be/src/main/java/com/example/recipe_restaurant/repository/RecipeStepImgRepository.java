package com.example.recipe_restaurant.repository;

import com.example.recipe_restaurant.entity.RecipesStepImgurl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipeStepImgRepository extends JpaRepository<RecipesStepImgurl, Long> {
    List<RecipesStepImgurl> findAllByFoodId(String foodId);
}
