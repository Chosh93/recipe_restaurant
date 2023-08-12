package com.example.recipe_restaurant.service;

import com.example.recipe_restaurant.dto.RecipesDto;
import com.example.recipe_restaurant.entity.Recipes;
import com.example.recipe_restaurant.repository.RecipesRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
@Slf4j
public class RecipesService {

    private final RecipesRepository recipesRepository;

    public RecipesService(RecipesRepository recipesRepository) {
        this.recipesRepository = recipesRepository;
    }

    public List<Recipes> getAllRecipes() {
        return recipesRepository.findAll();
    }
}
