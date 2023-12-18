package com.example.recipe_restaurant.controller;

import com.example.recipe_restaurant.dto.MemberDto;
import com.example.recipe_restaurant.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AccountController {

    private final MemberService memberService;

    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestBody MemberDto memberdto) {
        boolean isTrue = memberService.login(memberdto.getUserId(), memberdto.getUserPw());
        return ResponseEntity.ok(isTrue);
    }
}
