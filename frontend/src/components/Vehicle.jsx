import React, { useState, useEffect } from 'react'
import { getDriver } from '../services/api'
import { FaTaxi } from "react-icons/fa6";


export const Vehicle = () => {
  const [profileInfo, setProfileInfo] = useState({})

  const fetchVehicleInfo = async () => {
    try {
      const response = await getDriver()
      setProfileInfo(response)
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  useEffect(() => {
    fetchVehicleInfo()
  }, [])

  return (
    <article>
      <h1 className='title mb-3'>Vehiculo</h1>
      <section className='flex'>
        <div className='w-2/5'>  
          <FaTaxi className='w-full text-9xl'/>
        </div>
        {profileInfo.vehicle ? (
          <ul className='w-3/5 ml-6 list-disc'>
            <li id="vehicleModel">{profileInfo.vehicle.brand} {profileInfo.vehicle.model}</li>
            <li id='driverCategory'><b>Categoría: </b>{profileInfo.category}</li>
            <li id='licenseNumber'><b>Placa: </b>{profileInfo.vehicle.licensePlate}</li>
            <li id='yearOfFabrication'><b>Año de fabricación: </b>{profileInfo.vehicle.fabricationYear}</li>
            <li id='capacityNumber'><b>Capacidad: </b>{profileInfo.vehicle.capacity}</li>
          </ul>
        ) : (
          <p>Loading vehicle information...</p>
        )}
      </section>
    </article>
  )
}
