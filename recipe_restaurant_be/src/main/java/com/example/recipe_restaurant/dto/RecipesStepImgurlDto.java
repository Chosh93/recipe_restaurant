package com.example.recipe_restaurant.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RecipesStepImgurlDto {
    private Long id;
    private String foodId;
    private String stepNumber;
    private String stepImgUrl;
}
