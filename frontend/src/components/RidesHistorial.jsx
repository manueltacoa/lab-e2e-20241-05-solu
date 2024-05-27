import React, { useState, useEffect } from 'react'
import { RideItem } from './RideItem'
import { getRidesByUser } from '../services/api'

export const RidesHistorial = () => {
  const [rides, setRides] = useState([])

  const fetchRides = async () => {
    try {
      const data = await getRidesByUser(0, 5)
      setRides(data.content)
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  useEffect(() => {
    fetchRides()
  }, [])

  return (
    <article className='home-section'>
      <h1 className='title mb-3'>Historial de viajes</h1>
      <section id='ridesHistorial'>
        {rides.map((ride, index) => (
          <RideItem
            key={index}
            id={index}
            originName={ride.originName}
            departureDate={ride.departureDate}
            destinationName={ride.destinationName}
            price={ride.price}
          />
        ))}
      </section>
    </article>
  )
}
