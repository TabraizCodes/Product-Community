package com.nagarro.product.community.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.product.community.entity.User;
import com.nagarro.product.community.entity.UserArticles;
import com.nagarro.product.community.repository.ArticleRepository;

@Service
public class ArticleServiceImpl implements ArticleServices {
	
	@Autowired
	ArticleRepository repository;
	
	@Autowired
	UserServices services;


	@Override
	public void addArticle(UserArticles article) {
		repository.save(article);
		
	}

	@Override
	public List<UserArticles> findAllArticles() {
		List<UserArticles> list = repository.findAll();
		return list;
	}
	
	public List<UserArticles> findByUser(String user_email){
		User user = services.getUserById(user_email);
		return repository.findByUser(user);
	}
	
}
