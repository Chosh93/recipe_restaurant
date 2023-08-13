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
public class RecipesStepImgurl {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String foodId;
    @Column(name = "step_number")
    private String stepNumber;
    @Column(name = "step_imgUrl")
    private String stepImgUrl;
}
