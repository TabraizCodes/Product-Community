package com.nagarro.product.community.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.product.community.entity.UserArticles;
import com.nagarro.product.community.services.ArticleServices;

@RestController
@RequestMapping("/community")
@CrossOrigin(origins = "http://localhost:3000")
public class ArticleController {
	
	@Autowired
	ArticleServices services;
	
	@PostMapping("/addArticle")
	public void addUser(@RequestBody UserArticles article) {
		services.addArticle(article);
	}
	
	@RequestMapping("/allArticles")
	public List<UserArticles> findAllArticles(){
		return services.findAllArticles();
	}
	
	@RequestMapping("/articles/{user_email}")
	public List<UserArticles> findByUser(@PathVariable String user_email){
		return services.findByUser(user_email);
	}
	
	
	
}
