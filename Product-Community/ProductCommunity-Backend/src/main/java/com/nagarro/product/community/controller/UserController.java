package com.nagarro.product.community.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.product.community.entity.User;
import com.nagarro.product.community.services.UserServices;

@RestController
@RequestMapping("/community")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
  
	@Autowired
	UserServices userServices;
	
	@PostMapping("/signup")
	public void addUser(@RequestBody User user) {
		userServices.addUser(user);
	}
	
	@GetMapping("/user/{id}")
	public boolean userExists(@PathVariable String id) {
		return userServices.userExists(id);
	}
	
	@RequestMapping("/login/{userid}/{password}")
	public User getUserAuthenticated(@PathVariable String userid,@PathVariable String password) {
		return userServices.getUserAuthenticated(userid, password);
	}
	
	@RequestMapping("/details/{userid}")
	public User getUserById(@PathVariable String userid) {
		return userServices.getUserById(userid);
	}
	

}
