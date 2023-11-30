package com.example.recipe_restaurant.repository;

import com.example.recipe_restaurant.entity.RecipeRank;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Repository
public interface RecipeRankRepository extends JpaRepository<RecipeRank, String> {
    @Query("SELECT r FROM RecipeRank r ORDER BY r.viewCount DESC")
    List<RecipeRank> findAllByOrderByViewCountDesc();
    Optional<RecipeRank> findByFoodId(String foodId);
}
