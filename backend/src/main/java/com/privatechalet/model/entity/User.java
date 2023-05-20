package com.privatechalet.model.entity;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "first_name")
    private  String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = " phone_number")
    private String phoneNumber;
    @Column(name = "email")
    private String mail;

    public User( String firstName, String lastName, String phoneNumber, String mail) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.mail = mail;
    }
    public User() {

    }
    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }
    public String getPhoneNumber() {
        return phoneNumber;
    }
    public String getMail() {
        return mail;
    }
}
