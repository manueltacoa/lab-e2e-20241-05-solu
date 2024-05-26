import React, { useState, useEffect } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { 
  getRoleBasedOnToken,
  getPassenger,
  getDriver } from '../services/api'

export const Profile = ({setUserId}) => {
  const [profileInfo, setProfileInfo] = useState({})

  const fetchProfileInfo = async () => {
    if (getRoleBasedOnToken() === 'ROLE_DRIVER') {
      try {
        const response = await getDriver()
        setProfileInfo(response)
        setUserId(response.id)
      } catch (error) {
        console.error('Error:', error.message)
      }
    } else if (getRoleBasedOnToken() === 'ROLE_PASSENGER') {
      try {
        const response = await getPassenger()
        setProfileInfo(response)
        setUserId(response.id)
      } catch (error) {
        console.error('Error:', error.message)
      }
    } else {
      console.error('Error: No role found')
    }
  }

  useEffect(() => {
    fetchProfileInfo()
  }, [])

  return (
    <article>
      <h1 className='title mb-3'>Pasajero</h1>
      <section className='flex'>
        <div className='w-2/5'>  
          <FaUserCircle className='w-full text-9xl'/>
        </div>
        <ul className='w-3/5 ml-6 list-disc'>
          <li id="profileInfo">{profileInfo.firstName} {profileInfo.lastName}</li>
          <li>{profileInfo.email}</li>
          <li>{profileInfo.phoneNumber}</li>
          <li><b>N° viajes:</b> {profileInfo.trips}</li>
        </ul>
      </section>
    </article>
  )
}
