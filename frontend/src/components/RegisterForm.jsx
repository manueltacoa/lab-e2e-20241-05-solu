import React from 'react'

export const RegisterForm = () => {
  return (
    <section className='login-section bg-secondary p-4 rounded-2xl'>
      <h1 className='text-2xl font-bold'>Registrarse a Uber</h1>
      <form action="">
        <div>
          <label htmlFor="firstname">Nombres</label>
          <input type="firstname" name="firstname" id="firstname"/>
        </div>
        <div>
          <label htmlFor="lastname">Apellidos</label>
          <input type="lastname" name="lastname" id="lastname"/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email"/>
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password"/>
        </div>
        <div>
          <label htmlFor="phone">Celular</label>
          <input type="phone" name="phone" id="phone"/>
        </div>
        <div>
          <label htmlFor="isDriver">¿Eres Conductor?</label>
          <input type="radio" name="isDriver" id="driver" /> Sí
          <input type="radio" name="isDriver" id="passenger" /> No
        </div>
        <button className='bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer' type="submit">Iniciar Sesión</button>
      </form>
    </section>
  )
}
