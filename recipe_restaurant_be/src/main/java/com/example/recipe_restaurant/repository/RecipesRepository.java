package com.example.recipe_restaurant.repository;

import com.example.recipe_restaurant.entity.Recipes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RecipesRepository extends JpaRepository<Recipes, Long> {
    Optional<Recipes> findByFoodId(String foodId);

}
