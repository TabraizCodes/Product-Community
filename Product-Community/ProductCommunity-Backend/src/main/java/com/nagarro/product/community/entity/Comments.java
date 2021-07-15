package com.nagarro.product.community.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties 
public class Comments {
	
	@Id
	@GeneratedValue
	private long id;
	
    private String Comments;
    
    public String getPosterName() {
		return posterName;
	}

	public void setPosterName(String posterName) {
		this.posterName = posterName;
	}

	private String posterName;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="article_id")
	private UserArticles article;
	
	public long getId() {
		return id;
	}

	public String getComments() {
		return Comments;
	}

	public UserArticles getArticles() {
		return article;
	}

	public void setId(long id) {
		this.id = id;
	}

	public void setComments(String comments) {
		Comments = comments;
	}

	public void setArticles(UserArticles articles) {
		this.article = articles;
	}

	
	
}
