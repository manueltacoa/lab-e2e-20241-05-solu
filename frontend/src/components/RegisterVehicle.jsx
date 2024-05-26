import React, { useState } from 'react'
import { fetchRegister } from '../services/api';
import { useNavigate } from 'react-router-dom';

export const RegisterVehicle = ({formData}) => {
  const navigate = useNavigate();

  const [category, setCategory] = useState('');

  const [vehicleData, setVehicleData] = useState({
    brand: '',
    model: '',
    licensePlate: '',
    fabricationYear: 0,
    capacity: 0
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleData((prevVehicleData) => ({
      ...prevVehicleData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      category,
      vehicle: {
        ...vehicleData
      }
    }

    console.log(updatedFormData);

    try {
      fetchRegister(updatedFormData);

      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <section className='login-section bg-secondary p-4 rounded-2xl'>
      <h1 className='text-2xl font-bold'>Registra tu vehículo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="X">X</option>
            <option value="XL">XL</option>
            <option value="BLACK">BLACK</option>
          </select>
        </div>
        <div>
          <label htmlFor="brand">Brand</label>
          <input 
            type="text" 
            name="brand" 
            id="brand"
            value={vehicleData.brand} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label htmlFor="model">Model</label>
          <input 
            type="text" 
            name="model" 
            id="model"
            value={vehicleData.model} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label htmlFor="licensePlate">LicensePlate</label>
          <input 
            type="text" 
            name="licensePlate" 
            id="licensePlate"
            value={vehicleData.licensePlate} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label htmlFor="fabricationYear">FabricationYear</label>
          <input 
            type="number" 
            name="fabricationYear" 
            id="fabricationYear"
            value={vehicleData.fabricationYear} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label htmlFor="capacity">Capacity</label>
          <input 
            type="number" 
            name="capacity" 
            id="capacity"
            value={vehicleData.capacity} 
            onChange={handleChange} 
          />
        </div>
        <button id='registerVehicleSubmit' className='bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer' type="submit">Registrarse</button>
      </form>
    </section>
  );
}
