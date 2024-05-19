package org.e2e.e2e.driver.domain;

import org.e2e.e2e.ride.domain.Ride;
import org.e2e.e2e.ride.domain.Status;
import org.e2e.e2e.user.domain.Role;
import org.e2e.e2e.vehicle.domain.Vehicle;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

class DriverTest {

    private Driver driver;
    private Vehicle vehicle;
    private Ride ride;

    public void setUpVehicle(){
        vehicle = new Vehicle();
        vehicle.setBrand("Toyota");
        vehicle.setModel("Corolla");
        vehicle.setLicensePlate("ABC123");
        vehicle.setFabricationYear(2020);
        vehicle.setCapacity(5);
    }

    public void setUpRide(){
        ride = new Ride();
        ride.setOriginName("Origin");
        ride.setDestinationName("Destination");
        ride.setPrice(10.0);
        ride.setStatus(Status.REQUESTED);
        ride.setDriver(driver);

        // TODO: Passenger, Coordinate
    }

    public void setUpDriver(){
        driver = new Driver();
        driver.setRole(Role.DRIVER);
        driver.setFirstName("Juan");
        driver.setLastName("Perez");
        driver.setEmail("juanperez@gmail.com");
        driver.setPassword("123456");
        driver.setPhoneNumber("987654321");

        driver.setCategory(Category.X);
        driver.setHexAdress("0x123");
        driver.setVehicle(vehicle);
        driver.setRides(List.of(ride));
    }

    @BeforeEach
    void setUp(){
        setUpVehicle();
        setUpRide();
        setUpDriver();
    }

    @Test
    void testDriverCreation(){
        assertNotNull(driver);
        assertEquals(Role.DRIVER, driver.getRole());
        assertEquals("Juan", driver.getFirstName());
        assertEquals("Perez", driver.getLastName());
        assertEquals("juanperez@gmail.com", driver.getEmail());
        assertEquals("123456", driver.getPassword());
        assertEquals("987654321", driver.getPhoneNumber());

        assertEquals(Category.X, driver.getCategory());
        assertEquals("0x123", driver.getHexAdress());
        assertEquals(vehicle, driver.getVehicle());
        assertEquals(List.of(ride), driver.getRides());
    }

    @Test
    void testDriverCategory(){
        assertEquals(Category.X, driver.getCategory());
        driver.setCategory(Category.XL);
        assertEquals(Category.XL, driver.getCategory());
    }

    @Test
    void testGetVehicle(){
        assertEquals(vehicle, driver.getVehicle());
        assertEquals("Toyota", driver.getVehicle().getBrand());
    }

    @Test
    void testGetRides(){
        assertEquals(List.of(ride), driver.getRides());
        assertEquals("Origin", driver.getRides().get(0).getOriginName());
    }

    @Test
    void testDriverDelete(){
        driver = null;
        assertNull(driver);
    }
}