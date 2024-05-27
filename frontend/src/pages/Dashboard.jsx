import React, { useState } from 'react'
import { Profile } from '../components/Profile'
import { RidesHistorial } from '../components/RidesHistorial'
import { useNavigate } from 'react-router-dom'
import { getRoleBasedOnToken } from '../services/api'
import { Vehicle } from '../components/Vehicle'

export const Dashboard = () => {
  const [userId, setUserId] = useState(0)

  const navigate = useNavigate()
  return (
    <main className='p-10 grid grid-cols-2 gap-10'>
      <div className='home-section'>
        <Profile setUserId={setUserId}/>
        <button id='editProfile' onClick={() => navigate('/profile/edit')}>
          Editar
        </button>
      </div>

      { getRoleBasedOnToken() === 'ROLE_DRIVER' ? 
        <div className='home-section'>
          <Vehicle />
          <button id='editVehicle' onClick={() => navigate('/vehicle/edit')}>
            Editar
          </button>
        </div>
      : 
        <RidesHistorial />
      }

    </main>
  )
}
