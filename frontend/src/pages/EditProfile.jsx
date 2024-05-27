import React, { useState } from 'react'
import { 
  getRoleBasedOnToken,
  deletePassenger,
  deleteDriver,
  updatePassenger,
  updateDriverInfo } from '../services/api'
import { useNavigate } from 'react-router-dom'
import { Profile } from '../components/Profile'

export const EditProfile = () => {
  const [userId, setUserId] = useState(0)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const fetchDeleteUser = async () => {
    if (getRoleBasedOnToken() === 'ROLE_DRIVER') {
      try {
        await deleteDriver(userId)
        localStorage.removeItem('token')
        navigate('/auth/login')
      } catch (error) {
        console.error('Error:', error.message)
      }
    } else if (getRoleBasedOnToken() === 'ROLE_PASSENGER') {
      try {
        await deletePassenger(userId)
        localStorage.removeItem('token')
        navigate('/auth/login')
      } catch (error) {
        console.error('Error:', error.message)
      }
    } else {
      console.error('Error: No role found')
    }
  }

  const fetchUpdateUser = async () => {
    if (getRoleBasedOnToken() === 'ROLE_DRIVER') {
      try {
        console.log(userId, formData);
        const res = await updateDriverInfo(userId, formData)
        console.log(res)
      } catch (error) {
        console.error('Error:', error.message)
      }
    } else if (getRoleBasedOnToken() === 'ROLE_PASSENGER') {
      try {
        const res = await updatePassenger(formData)
      } catch (error) {
        console.error('Error:', error.message)
      }
    } else {
      console.error('Error: No role found')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();


    fetchUpdateUser()

    navigate('/dashboard')
  };

  return (
    <main>
      <article>
        <h1>Editar Perfil</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">Nombres</label>
            <input 
              type="text" 
              name="firstName" 
              id="firstName"
              value={formData.firstName} 
              onChange={handleChange} 
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Apellidos</label>
            <input 
              type="text" 
              name="lastName" 
              id="lastName"
              value={formData.lastName} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Celular</label>
            <input 
              type="number" 
              name="phoneNumber" 
              id="phoneNumber"
              value={formData.phoneNumber} 
              onChange={handleChange} 
            />
          </div>
          <button 
            id='updateSubmit' 
            className='bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer' 
            type="submit"
          >
            Actualizar
          </button>
        </form>
      </article>

      <Profile setUserId={setUserId}/>

      <button 
        id='deleteUser'
        onClick={fetchDeleteUser}
      >
        Eliminar cuenta
      </button>
    </main>
  )
}
