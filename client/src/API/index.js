import axios from 'axios';
const API = {
  registerUser: (data) => axios.post('/api/auth/create', data)
}

export default API;