import React, { useState } from 'react'
import { Profile } from '../components/Profile'
import { RidesHistorial } from '../components/RidesHistorial'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  const [userId, setUserId] = useState(0)

  const navigate = useNavigate()
  return (
    <main className='flex justify-between p-10'>
      <div className='home-section'>
        <Profile setUserId={setUserId}/>
        <button id='editProfile' onClick={() => navigate('/profile/edit')}>
          Editar
        </button>
      </div>
      <RidesHistorial />
    </main>
  )
}
