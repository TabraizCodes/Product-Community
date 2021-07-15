package com.nagarro.product.community.services;

import com.nagarro.product.community.entity.User;

public interface UserServices {
	public void addUser(User user);
	public boolean userExists(String email);
	public User getUserById(String email);
	public User getUserAuthenticated(String userId,String password);
	
}
