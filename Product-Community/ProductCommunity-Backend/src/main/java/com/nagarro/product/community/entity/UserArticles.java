package com.nagarro.product.community.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "articles")
public class UserArticles {
	@Id
	@GeneratedValue
	private long id;
	
	private String subject;
	private String product;
	private String content;
	
	@OneToMany(mappedBy = "article", cascade = CascadeType.ALL)
	@JsonIgnore
	private Set<Comments> comments;
	
    @ManyToOne
	@JoinColumn(name = "user_email")
    private User user;

	public long getId() {
		return id;
	}

	public String getSubject() {
		return subject;
	}

	public String getProduct() {
		return product;
	}

	public String getContent() {
		return content;
	}

	public User getUser() {
		return user;
	}

	public void setId(long id) {
		this.id = id;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
