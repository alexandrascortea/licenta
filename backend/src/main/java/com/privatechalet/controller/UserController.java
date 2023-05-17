package com.privatechalet.controller;


import com.privatechalet.model.User;
import com.privatechalet.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/users")
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/getAllUsers")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }





}
