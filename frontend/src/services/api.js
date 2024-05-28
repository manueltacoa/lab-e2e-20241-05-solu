import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const BACKEND_URL = 'http://127.0.0.1:8080'; // Spring Boot

// Obtiene el endpoint que corresponde al token
export const getRoleBasedOnToken = () => {
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  return decodedToken.role;
}


// Consume el endpoint "/login" del backend y hace un post
export const fetchLogin = async (body) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/auth/login`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {;
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

// Consume el endpoint "/register" del backend y hace un post
export const fetchRegister = async (body) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/register`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
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
export const getPassenger = async () => {
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

// Consume el endpoint "/driver/me" del backend y hace un get
export const getDriver = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/driver/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })

    if (response.status === 200) {
      return response.data;
    }
    else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}

// Consume el endpoint "/ride/user" del backend y hace un get
export const getRidesByUser = async (page, size) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/ride/user?page=${page}&size=${size}`, {
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

// Consume el endpoint "/passenger/{id]" del backend y hace un delete
export const deletePassenger = async (id) => {
  try {
    const response = await axios.delete(`${BACKEND_URL}/passenger/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })

    if (response.status === 204) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}

// Consume el endpoint "/driver/{id]" del backend y hace un delete
export const deleteDriver = async (id) => {
  try {
    const response = await axios.delete(`${BACKEND_URL}/driver/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })

    if (response.status === 204) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}

// Consume el endpoint "/passenger/{id}" del backend y hace un patch
export const updatePassenger = async (body) => {
  try {
    const response = await axios.patch(`${BACKEND_URL}/passenger/me`, body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })

    if (response.status === 204) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}

// Consume el endpoint "/driver/{id}" del backend y hace un patch
export const updateDriverInfo = async (id, body) => {
  try {
    const response = await axios.patch(`${BACKEND_URL}/driver/${id}`, body, {
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

// Consume el endpoint "/driver/{id}/car" del backend y hace un patch
export const updateDriverCar = async (id, body) => {
  try {
    const response = await axios.patch(`${BACKEND_URL}/driver/${id}/car`, body, {
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

