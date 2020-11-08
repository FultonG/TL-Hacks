import axios from 'axios';
const API = {
  registerUser: (data) => axios.post('/api/auth/create', data),
  authenticateUser: (data) => axios.post('/api/auth/login', data),
  getSummonerInfo: (summonerName, token) => axios.post('/api/summoner/info', {summonerName}, { headers: {'x-access-token': token}}),
  getTournamentInfo: () => axios.post('/api/liquidpedia/tournaments')
}

export default API;