package org.e2e.e2e.user.domain;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.ZonedDateTime;

import static org.junit.jupiter.api.Assertions.*;

public class UserTest {

    private User user;

    @BeforeEach
    void setUp() {
        user = new User();
        user.setRole(Role.PASSENGER);
        user.setFirstName("John");
        user.setLastName("Doe");
        user.setEmail("john@doe.com");
        user.setPassword("password");
        user.setPhoneNumber("999999999");
        user.setTrips(10);
        user.setAvgRating((float) 4.5);
        user.setCreatedAt(ZonedDateTime.now());
    }

    @Test
    void testUserCreation(){
        assertNotNull(user);
        assertEquals(Role.PASSENGER, user.getRole());
        assertEquals("John", user.getFirstName());
        assertEquals("Doe", user.getLastName());
        assertEquals("john@doe.com", user.getEmail());
        assertEquals("password", user.getPassword());
        assertEquals("999999999", user.getPhoneNumber());
        assertEquals(10, user.getTrips());
        assertEquals(4.5, user.getAvgRating(), 0);
        assertNotNull(user.getCreatedAt());
    }

    @Test
    void testUserRole(){
        assertEquals(Role.PASSENGER, user.getRole());
        user.setRole(Role.DRIVER);
        assertEquals(Role.DRIVER, user.getRole());
    }

    @Test
    void testUserUpdate(){
        user.setFirstName("Jane");
        user.setLastName("Smith");
        user.setEmail("jane@smith.com");
        user.setPassword("password3");
        user.setPhoneNumber("988888888");
        user.setTrips(20);
        user.setAvgRating((float) 4.8);

        assertEquals("Jane", user.getFirstName());
        assertEquals("Smith", user.getLastName());
        assertEquals("jane@smith.com", user.getEmail());
        assertEquals("password3", user.getPassword());
        assertEquals("988888888", user.getPhoneNumber());
        assertEquals(20, user.getTrips());
        assertEquals(4.8, user.getAvgRating(), 0);
    }

    // Testing override functions
    @Test
    void testGetUsername(){
        assertEquals("jane@smith.com", user.getUsername());
    }

    @Test
    void testIsAccountNonExpired(){
        assertTrue(user.isAccountNonExpired());
    }

    @Test
    void testIsAccountNonLocked(){
        assertTrue(user.isAccountNonLocked());
    }

    @Test
    void testIsCredentialsNonExpired(){
        assertTrue(user.isCredentialsNonExpired());
    }

    @Test
    void testIsEnabled(){
        assertTrue(user.isEnabled());
    }


    @Test
    void testUserDelete(){
        user = null;
        assertNull(user);
    }
}
