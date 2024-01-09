package com.example.recipe_restaurant.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberDto {
    private Long id;
    private String userId;
    private String userPw;
}
