import React from 'react'
import { Profile } from '../components/Profile'
import { RidesHistorial } from '../components/RidesHistorial'

export const Home = () => {
  return (
    <main className='flex justify-between p-10'>
      <Profile />
      <RidesHistorial />
    </main>
  )
}
