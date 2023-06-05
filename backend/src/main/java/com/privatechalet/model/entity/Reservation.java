package com.privatechalet.model.entity;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "reservations")
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "check_in")
    private LocalDate checkIn;
    @Column(name = "check_out")
    private LocalDate checkOut;
    @Column(name = "adult_number")
    private String adultNumber;
    @Column(name = "kid_number")
    private String kidNumber;

    public Reservation(int id, LocalDate checkIn, LocalDate checkOut, String adultNumber, String kidNumber) {
        this.id = id;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.adultNumber = adultNumber;
        this.kidNumber = kidNumber;
    }

    public Reservation( ) {

    }

    public int getId() {
        return id;
    }

    public LocalDate getCheckIn() {
        return checkIn;
    }

    public LocalDate getCheckOut() {
        return checkOut;
    }

    public String getAdultNumber() {
        return adultNumber;
    }

    public String getKidNumber() {
        return kidNumber;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setCheckIn(LocalDate checkIn) {
        this.checkIn = checkIn;
    }

    public void setCheckOut(LocalDate checkOut) {
        this.checkOut = checkOut;
    }

    public void setAdultNumber(String adultNumber) {
        this.adultNumber = adultNumber;
    }

    public void setKidNumber(String kidNumber) {
        this.kidNumber = kidNumber;
    }

    @Override
    public String toString() {
        return "Reservation{" +
                "id=" + id +
                ", checkIn=" + checkIn +
                ", checkOut=" + checkOut +
                ", adultNumber='" + adultNumber + '\'' +
                ", kidNumber='" + kidNumber + '\'' +
                '}';
    }
}


