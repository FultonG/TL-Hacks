import axios from 'axios';
const API = {
  registerUser: (data) => axios.post('/api/auth/create', data),
  authenticateUser: (data) => axios.post('/api/auth/login', data)
}

export default API;