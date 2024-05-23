import React from 'react'
import { Button } from '../components/Button'
import { RegisterForm } from '../components/RegisterForm'
import img6 from '../assets/Img6.jpg'

export const Register = () => {
  return (
    <main className='px-10'>
      <section className='flex justify-center items-center py-4'>
        <Button message="Iniciar Sesión" to="/login"/>
        <Button message="Registrarse" to="/register"/>
      </section>

      <article className='flex justify-between'>
        <section className='login-section flex flex-col items-center p-4 text-center'>
          <h1 className='title'>¡Bienvenido!</h1>
          <p>Regístrate como pasajero o conductor para empezar con Uber</p>
          <img src={img6} alt="uber" />
        </section>
        <RegisterForm />
      </article>
    </main>
  )
}
