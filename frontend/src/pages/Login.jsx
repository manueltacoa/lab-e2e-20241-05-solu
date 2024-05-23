import React from 'react'

import { Button } from '../components/Button'
import { LoginForm } from '../components/LoginForm'
import img4 from '../assets/Img4.jpg'

export const Login = () => {
  return (
    <main className='px-10'>
      <section className='flex justify-center items-center py-4'>
        <Button message="Iniciar Sesión" to="/login"/>
        <Button message="Registrarse" to="/register"/>
      </section>

      <article className='flex justify-between'>
        <LoginForm />
        <section className='login-section flex flex-col items-center p-4 text-center'>
          <h2 className='title'>Bienvenido de vuelta</h2>
          <p>Inicia sesión para empezar a usar Uber</p>
          <img src={img4} alt="uber" />
        </section>
      </article>
    </main>
  )
}
