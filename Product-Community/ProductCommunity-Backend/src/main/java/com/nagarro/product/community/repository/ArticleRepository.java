package com.nagarro.product.community.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nagarro.product.community.entity.User;
import com.nagarro.product.community.entity.UserArticles;

@Repository
public interface ArticleRepository extends JpaRepository<UserArticles, Long> {
	public List<UserArticles> findByUser(User user);
}
