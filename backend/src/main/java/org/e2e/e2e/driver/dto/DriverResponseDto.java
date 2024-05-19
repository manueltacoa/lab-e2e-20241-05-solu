package org.e2e.e2e.driver.dto;

import lombok.Data;
import org.e2e.e2e.driver.domain.Category;
import org.e2e.e2e.vehicle.dto.VehicleBasicDto;

@Data
public class DriverResponseDto {
    private Long id;
    private Category category;
    private String firstName;
    private String lastName;
    private Integer trips;
    private Float avgRating;
    private VehicleBasicDto vehicle;
}
