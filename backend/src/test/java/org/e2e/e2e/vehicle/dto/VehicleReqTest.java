package org.e2e.e2e.vehicle.dto;

import org.e2e.e2e.vehicle.domain.Vehicle;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;

import static org.junit.jupiter.api.Assertions.*;

class VehicleReqTest {

    private ModelMapper modelMapper;

    @BeforeEach
    public void setUp() {
        modelMapper = new ModelMapper();
    }

    @Test
    void testMapVehicleReqToVehicle() {
        Vehicle vehicle = new Vehicle();
        vehicle.setBrand("Toyota");
        vehicle.setModel("Corolla");
        vehicle.setLicensePlate("ABC123");
        vehicle.setFabricationYear(2020);
        vehicle.setCapacity(5);

        VehicleBasicDto vehicleDto = modelMapper.map(vehicle, VehicleBasicDto.class);

        assertNotNull(vehicleDto);
        assertEquals(vehicle.getBrand(), vehicleDto.getBrand());
        assertEquals(vehicle.getModel(), vehicleDto.getModel());
        assertEquals(vehicle.getLicensePlate(), vehicleDto.getLicensePlate());
        assertEquals(vehicle.getFabricationYear(), vehicleDto.getFabricationYear());
        assertEquals(vehicle.getCapacity(), vehicleDto.getCapacity());
    }

    @Test
    void testSetBrandNull() {
        VehicleBasicDto vehicleReq = new VehicleBasicDto();
        vehicleReq.setBrand(null);
        assertNull(vehicleReq.getBrand());
    }

    @Test
    void testSetModelNull() {
        VehicleBasicDto vehicleReq = new VehicleBasicDto();
        vehicleReq.setModel(null);
        assertNull(vehicleReq.getModel());
    }

    @Test
    void testSetLicensePlateNull() {
        VehicleBasicDto vehicleReq = new VehicleBasicDto();
        vehicleReq.setLicensePlate(null);
        assertNull(vehicleReq.getLicensePlate());
    }

    @Test
    void testSetYearNull() {
        VehicleBasicDto vehicleReq = new VehicleBasicDto();
        vehicleReq.setFabricationYear(null);
        assertNull(vehicleReq.getFabricationYear());
    }

    @Test
    void testSetCapacityNull() {
        VehicleBasicDto vehicleReq = new VehicleBasicDto();
        vehicleReq.setCapacity(null);
        assertNull(vehicleReq.getCapacity());
    }
}