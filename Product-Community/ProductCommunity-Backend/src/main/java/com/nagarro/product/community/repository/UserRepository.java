package com.nagarro.product.community.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nagarro.product.community.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
           
	
}
