import axios from 'axios';
const API = {
  registerUser: (data) => axios.post('/api/auth/create', data),
  authenticateUser: (data) => axios.post('/api/auth/login', data),
  getSummonerInfo: (summonerName, token) => axios.post('/api/summoner/info', {summonerName}, { headers: {'x-access-token': token}})
}

export default API;