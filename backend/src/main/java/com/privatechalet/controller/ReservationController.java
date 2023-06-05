package com.privatechalet.controller;

import com.privatechalet.model.entity.Reservation;
import com.privatechalet.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ReservationController {
    @Autowired
    private ReservationRepository reservationRepository;

    @PostMapping("/reservation")
    public ResponseEntity<Reservation> createReservation(@RequestBody Reservation newReservation) {
        try {
            if (newReservation.getCheckIn() == null) {
                // Handle the case when check-in date is null
                return ResponseEntity.badRequest().build();
            }

            Reservation createdReservation = reservationRepository.save(newReservation);
            return ResponseEntity.ok(createdReservation);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    @GetMapping("/getAllReservations")
    List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }
}
