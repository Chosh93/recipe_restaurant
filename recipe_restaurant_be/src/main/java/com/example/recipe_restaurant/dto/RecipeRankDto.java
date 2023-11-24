package com.example.recipe_restaurant.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RecipeRankDto {
    private Long id;
    private String foodId;
    private int viewCount;
}
