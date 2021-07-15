package com.nagarro.product.community.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nagarro.product.community.entity.Comments;

@Repository
public interface CommentRepository extends JpaRepository<Comments, Long> {
	public List<Comments> findByArticleId(long id);
}
