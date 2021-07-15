package com.nagarro.product.community.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.product.community.entity.Comments;
import com.nagarro.product.community.services.CommentServices;

@RestController
@RequestMapping("/community")
@CrossOrigin(origins = "http://localhost:3000")
public class CommentController {
	
	@Autowired
	CommentServices services;
	
	@PostMapping("/addComment")
	public void addComment(@RequestBody Comments comments) {
		services.addComment(comments);
	}
	@RequestMapping("/comments/{artId}")
	public List<Comments> findByArticleId(@PathVariable long artId){
		return services.findByArticleId(artId);
	}
}
