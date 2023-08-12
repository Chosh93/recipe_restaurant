package com.example.recipe_restaurant.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Recipes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "food_id")
    private String foodId;
    @Column(name = "name")
    private String name;
    @Column(name = "thumb_img")
    private String thumbImg;
    @Column(name = "intro", columnDefinition = "TEXT")
    private String intro;
    @Column(name = "ingredients", columnDefinition = "TEXT")
    private String ingredients;

}