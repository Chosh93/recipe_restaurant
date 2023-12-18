package com.example.recipe_restaurant.repository;

import com.example.recipe_restaurant.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByUserIdAndUserPw(String userId, String userPw);
}
