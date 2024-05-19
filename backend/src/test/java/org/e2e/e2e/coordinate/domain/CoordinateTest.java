package org.e2e.e2e.coordinate.domain;

import org.e2e.e2e.user_locations.domain.UserLocation;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CoordinateTest {

    private Coordinate coordinate;
    private UserLocation userLocation;

    void setUpUserLocation() {
        userLocation = new UserLocation();
    }

    @BeforeEach
    public void setUp() {
        setUpUserLocation();
        coordinate = new Coordinate(1.0, 1.0);
        coordinate.setPassengers(List.of(userLocation));
    }

    @Test
    void testCoordinateCreation() {
        assertEquals(1.0, coordinate.getLatitude());
        assertEquals(1.0, coordinate.getLongitude());
        assertEquals(List.of(userLocation), coordinate.getPassengers());
    }
}
