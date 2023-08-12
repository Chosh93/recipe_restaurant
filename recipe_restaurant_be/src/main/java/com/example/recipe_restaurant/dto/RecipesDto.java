package com.example.recipe_restaurant.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RecipesDto {
    private Long id;
    private String foodId;
    private String name;
    private String thumbImg;
    private String intro;
    private String ingredients;
}
