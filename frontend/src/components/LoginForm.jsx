import React, { useState } from 'react';
import { loginApi } from '../services/api';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Estado para manejar errores y mensajes de éxito
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Hook para redireccionar a otra página
  const navigate = useNavigate();

  // Función para manejar los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      loginApi(formData);
      setError(null);
      setSuccessMessage('Inicio de Sesión exitoso');
      
      setTimeout(() => {
        navigate('/home');
      }, 2000);
    } catch (error) {
      setError(error.message);
      setSuccessMessage(null);
    }
  };

  return (
    <section className='login-section bg-secondary p-4 rounded-2xl'>
      <h1 className='title'>Ingresar a Uber</h1>
      <form onSubmit={handleSubmit}>
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
        <button className='bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer' type="submit">Iniciar Sesión</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {successMessage && <div style={{ color: 'blue' }}>{successMessage}</div>}
    </section>
  );
};
