package com.nagarro.product.community.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.product.community.entity.Comments;
import com.nagarro.product.community.repository.CommentRepository;

@Service
public class CommentServiceImpl implements CommentServices{

	@Autowired
	CommentRepository repository;
	
	@Override
	public void addComment(Comments comment) {
		repository.save(comment);
	}

	@Override
	public List<Comments> findByArticleId(long id) {
		// TODO Auto-generated method stub
		return repository.findByArticleId(id);
	}

}
