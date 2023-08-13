package com.example.recipe_restaurant.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RecipeStepTextDto {
    private Long id;
    private String foodId;
    private String stepNumber;
    private String stepText;
}
