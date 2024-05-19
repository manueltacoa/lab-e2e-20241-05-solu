package org.e2e.e2e.user_locations.domain;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class PassengerCoordinateIdTest {

    private PassengerCoordinateId passengerCoordinateId;

    @BeforeEach
    void setUp() {
        passengerCoordinateId = new PassengerCoordinateId(1L, 1L);
    }

    @Test
    void testPassengerCoordinatedIdCreation() {
        assertEquals(1L, passengerCoordinateId.getPassengerId());
        assertEquals(1L, passengerCoordinateId.getCoordinateId());
    }
}
