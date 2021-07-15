package com.nagarro.product.community.services;

import java.util.List;

import com.nagarro.product.community.entity.Comments;

public interface CommentServices {
	
	public void addComment(Comments comment);
	public List<Comments> findByArticleId(long id);

}
