import React from 'react'
import { RideItem } from './RideItem'

export const RidesHistorial = () => {
  return (
    <article className='home-section'>
      <h1 className='title mb-3'>Historial de viajes</h1>
      <section>
        <RideItem/>
      </section>
    </article>
  )
}
