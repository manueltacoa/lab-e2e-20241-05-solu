INSERT INTO public.coordinate (id, latitude, longitude) VALUES (1, 1.2, 2.2),(2, 1.1, 2.2),(3, 1.1, 2.2);

INSERT INTO public.users (id, avg_rating, created_at, email, first_name, last_name, password, phone_number, role, trips, updated_at) VALUES (1, 0, '2024-05-20 23:32:22.874029-05', 'jmonja@utec.edu.pe', 'Jeffrey', 'Monja', '$2a$10$WloHutd2jTVy6AKqKwq0se3DuOkCh7b.eCGiZlNZIlQFu/JwxEDPi', '999999999', 1, 0, NULL),(2, 0, '2024-05-21 00:17:56.415755-05', 'john.doe@utec.edu.pe', 'John', 'Doe', '$2a$10$MpZ1CKmZyMHTUnMKhzz84e5OTMpxvTVOSPx.c3uHiVFkOcd1tnqbm', '999999998', 2, 0, NULL);

INSERT INTO public.vehicle (id, brand, capacity, fabrication_year, license_plate, model) VALUES (1, 'Audi', 5, 2020, 'ABC-123', 'R8');

INSERT INTO public.driver (category, hex_adress, id, vehicle_id) VALUES (0, NULL, 2, 1);

INSERT INTO public.passenger (id) VALUES (1);

INSERT INTO public.ride (id, arrival_date, departure_date, destination_name, origin_name, price, status, destination_coordinates_id, driver_id, origin_coordinates_id, passenger_id) VALUES (1, NULL, NULL, 'Lima', 'Barranco', 20.99, 3, 2, 2, 3, 1);

INSERT INTO public.user_location (description, passenger_id, coordinate_id) VALUES ('Test place', 1, 1);
