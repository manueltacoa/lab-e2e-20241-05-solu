import React, { useState, useEffect } from 'react'
import { getPassengerInfo } from '../services/api'

export const Profile = () => {
  const [passengerInfo, setPassengerInfo] = useState({})

  const fetchPassengerInfo = async () => {
    try {
      const response = await getPassengerInfo()
      setPassengerInfo(response)
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  useEffect(() => {
    fetchPassengerInfo()
  }, [])

  return (
    <article className='home-section'>
      <h1 className='title mb-3'>Pasajero</h1>
      <ul>
        <li>{passengerInfo.firstName} {passengerInfo.lastName}</li>
        <li>{passengerInfo.email}</li>
        <li>{passengerInfo.phoneNumber}</li>
        <li><b>N° viajes:</b> {passengerInfo.trips}</li>
      </ul>
    </article>
  )
}
