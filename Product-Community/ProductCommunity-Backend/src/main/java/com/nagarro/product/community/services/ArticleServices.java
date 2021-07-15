package com.nagarro.product.community.services;

import java.util.List;
import com.nagarro.product.community.entity.UserArticles;

public interface ArticleServices {
	
	public void addArticle(UserArticles article);
	public List<UserArticles> findAllArticles();
	public List<UserArticles> findByUser(String user_email);
	

}
