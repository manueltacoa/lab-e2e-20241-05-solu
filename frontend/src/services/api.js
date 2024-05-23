import axios from 'axios';

const BACKEND_URL = 'http://127.0.0.1:8080'; // Spring Boot

// Consume el endpoint "/auth/login" del backend y hace un post
export const loginApi = async (body) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/auth/login`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {;
      // Guardar token en localStorage
      localStorage.setItem('token', response.data.token); 
      return response.data;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// Consume el endpoint "/passenger/me" del backend y hace un get
export const getPassengerInfo = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/passenger/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`, 
      },
    })

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}