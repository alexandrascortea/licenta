package com.privatechalet.controller;


import com.privatechalet.model.entity.ContactUs;
import com.privatechalet.model.entity.User;
import com.privatechalet.repository.ContactUsRepository;
import com.privatechalet.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private ContactUsRepository contactUsRepository;
    //create
    @PostMapping("/contact")
    ContactUs newContact(@RequestBody ContactUs newContact) {
        return contactUsRepository.save(newContact);
    }
//read
    @GetMapping("/getAllContact")
    List<ContactUs> getAllContact() {return contactUsRepository.findAll();}

    //update
    @PutMapping("/contact-us/{id}")
    public ContactUs updateContactUs(@PathVariable Integer id, @RequestBody ContactUs updatedContactUs) {
        return contactUsRepository.findById(id).map(contactUs -> {
            contactUs.setName(updatedContactUs.getName());
            contactUs.setEmail(updatedContactUs.getEmail());
            // Update other fields as needed
            return contactUsRepository.save(contactUs);
        }).orElseThrow(() -> new NoSuchElementException("ContactUs not found with id: " + id));
    }
//delete

    @DeleteMapping("/contact-us/{id}")
    public void deleteContactUs(@PathVariable Integer id) {
        contactUsRepository.deleteById(id);
    }



}
