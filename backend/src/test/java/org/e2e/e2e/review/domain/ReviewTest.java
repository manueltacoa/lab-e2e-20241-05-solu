package org.e2e.e2e.review.domain;

import org.e2e.e2e.passenger.domain.Passenger;
import org.e2e.e2e.ride.domain.Ride;
import org.e2e.e2e.user.domain.Role;
import org.e2e.e2e.user.domain.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.ZonedDateTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ReviewTest {

    private Review review;
    private Ride ride;
    private User user;

    void setUpPassenger() {
        user = new User();
        user.setRole(Role.PASSENGER);
        user.setFirstName("Carlos");
        user.setLastName("Gutierrez");
        user.setEmail("carlosgutierrez@gmail.com");
        user.setPassword("123456");
        user.setPhoneNumber("987654321");
        user.setCreatedAt(ZonedDateTime.now());
    }

    @BeforeEach
    void setUp(){
        setUpPassenger();
        review = new Review();
        review.setComment("comment1");
        review.setRating(5);
        review.setAuthor(user);
        review.setTarget(user);
        review.setRide(ride);
    }

    @Test
    void testReviewCreation(){
        assertEquals("comment1", review.getComment());
        assertEquals(5, review.getRating());
        assertEquals(user, review.getAuthor());
        assertEquals(user, review.getTarget());
        assertEquals(ride, review.getRide());
    }
}
