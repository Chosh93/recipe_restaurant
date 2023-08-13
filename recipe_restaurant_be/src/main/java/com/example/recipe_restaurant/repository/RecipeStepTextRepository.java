package com.example.recipe_restaurant.repository;

import com.example.recipe_restaurant.entity.RecipesStepText;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipeStepTextRepository extends JpaRepository<RecipesStepText, Long> {
    List<RecipesStepText> findAllByFoodId(String foodId);
}
