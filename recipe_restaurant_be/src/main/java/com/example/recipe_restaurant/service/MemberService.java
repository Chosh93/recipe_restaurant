package com.example.recipe_restaurant.service;

import com.example.recipe_restaurant.entity.Member;
import com.example.recipe_restaurant.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    // 회원 로그인
    public boolean login(String userId, String userPw) {
        Optional<Member> member = memberRepository.findByUserIdAndUserPw(userId, userPw);
        return member.isPresent();
    }
}
