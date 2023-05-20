package com.privatechalet.controller;


import com.privatechalet.model.entity.ContactUs;
import com.privatechalet.model.entity.User;
import com.privatechalet.repository.ContactUsRepository;
import com.privatechalet.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3001")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ContactUsRepository contactUsRepository;

    @GetMapping("/getAllContact")
    List<ContactUs> getAllContact() {return contactUsRepository.findAll();}

    @PostMapping("/users")
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @PostMapping("/contact")
    ContactUs newContact(@RequestBody ContactUs newContact) {
        return contactUsRepository.save(newContact);
    }


    @GetMapping("/getAllUsers")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

}
