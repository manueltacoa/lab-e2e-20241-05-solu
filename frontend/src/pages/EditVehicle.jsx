import React, { useState } from 'react'
import { updateDriverCar, getDriver } from '../services/api'
import { Vehicle } from '../components/Vehicle'
import { useNavigate } from 'react-router-dom'

export const EditVehicle = () => {
  const navigate = useNavigate()

  const [newVehicle, setNewVehicle] = useState({
    brand: '',
    model: '',
    licensePlate: '',
    fabricationYear: 0,
    capacity: 0
  })

  const getDriverId = async () => {
    try {
      const response = await getDriver()
      return response.id
    } catch (error) {
      console.error('Error:', error.message)
    }
  }      

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVehicle((prevVehicleData) => ({
      ...prevVehicleData,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const driverId = await getDriverId()
      await updateDriverCar(driverId, newVehicle)
      navigate('/dashboard')
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  return (
    <main>
      <article>
        <h1>Editar Vehiculo</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="brand">Brand</label>
            <input 
              type="text" 
              name="brand" 
              id="brand"
              value={newVehicle.brand} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label htmlFor="model">Model</label>
            <input 
              type="text" 
              name="model" 
              id="model"
              value={newVehicle.model} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label htmlFor="licensePlate">LicensePlate</label>
            <input 
              type="text" 
              name="licensePlate" 
              id="licensePlate"
              value={newVehicle.licensePlate} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label htmlFor="fabricationYear">FabricationYear</label>
            <input 
              type="number" 
              name="fabricationYear" 
              id="fabricationYear"
              value={newVehicle.fabricationYear} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label htmlFor="capacity">Capacity</label>
            <input 
              type="number" 
              name="capacity" 
              id="capacity"
              value={newVehicle.capacity} 
              onChange={handleChange} 
            />
          </div>
          <button id='vehicleSubmit' className='bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer' type="submit">Registrarse</button>
        </form>
      </article> 
      <Vehicle />
    </main>
  )
}
