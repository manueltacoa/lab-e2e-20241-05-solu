import React from 'react';
import { fetchRegister } from '../services/api';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = ({setVehicleRegister, formData, setFormData}) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'radio' ? (value === 'true') : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if (formData.isDriver) {
      setVehicleRegister(true);
    } else {
      try {
        fetchRegister(formData);

        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  return (
    <section className='login-section bg-secondary p-4 rounded-2xl'>
      <h1 className='text-2xl font-bold'>Registrarse a Uber</h1>
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
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input 
            type="password" 
            name="password" 
            id="password"
            value={formData.password} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label htmlFor="phone">Celular</label>
          <input 
            type="text" 
            name="phone" 
            id="phone"
            value={formData.phone} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label htmlFor="isDriver">¿Eres Conductor?</label>
          <input 
            type="radio" 
            name="isDriver" 
            id="driver" 
            value="true" 
            checked={formData.isDriver === true} 
            onChange={handleChange} 
          /> Sí
          <input 
            type="radio" 
            name="isDriver" 
            id="passenger" 
            value="false" 
            checked={formData.isDriver === false} 
            onChange={handleChange} 
          /> No
        </div>
        <button id='registerSubmit' className='bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer' type="submit">Registrarse</button>
      </form>
    </section>
  );
}
