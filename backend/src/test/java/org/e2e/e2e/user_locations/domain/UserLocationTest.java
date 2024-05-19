package org.e2e.e2e.user_locations.domain;

import org.e2e.e2e.coordinate.domain.Coordinate;
import org.e2e.e2e.passenger.domain.Passenger;
import org.e2e.e2e.ride.domain.Ride;
import org.e2e.e2e.user.domain.Role;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.ZonedDateTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class UserLocationTest {

    private Passenger passenger;
    private Coordinate coordinate;
    private UserLocation userLocation;

    void setUpPassenger() {
        passenger = new Passenger();
        passenger.setRole(Role.PASSENGER);
        passenger.setFirstName("Carlos");
        passenger.setLastName("Gutierrez");
        passenger.setEmail("carlosgutierrez@gmail.com");
        passenger.setPassword("123456");
        passenger.setPhoneNumber("987654321");
        passenger.setCreatedAt(ZonedDateTime.now());

        passenger.setCoordinates(List.of(userLocation));
    }

    void setUpCoordinate() {
        coordinate = new Coordinate(1.0, 1.0);
        coordinate.setPassengers(List.of(userLocation));
    }

    @BeforeEach
    void setUp() {
        setUpPassenger();
        setUpCoordinate();

        userLocation = new UserLocation(passenger, coordinate, "description1");
    }

    @Test
    void testUserLocationCreation(){
        assertEquals(passenger, userLocation.getPassenger());
        assertEquals(coordinate, userLocation.getCoordinate());
        assertEquals("description1", userLocation.getDescription());
    }
}
