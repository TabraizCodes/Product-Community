package com.nagarro.product.community.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.product.community.entity.User;
import com.nagarro.product.community.repository.UserRepository;

@Service
public class UserServicesImpl implements UserServices {
	
	@Autowired
	UserRepository userRepository;
	
	
	public User getUserAuthenticated(String userId,String password) {
		User user = this.getUserById(userId);
		if(user.getPassword().equals(password)) {
			return user;
		}
		return null;
	}

	@Override
	public void addUser(User user) {
		userRepository.save(user);
	}

	@Override
	public boolean userExists(String email) {
		return userRepository.existsById(email);
	}

	@Override
	public User getUserById(String email) {
		return userRepository.getById(email);
	}
	
	


}
