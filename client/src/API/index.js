import axios from 'axios';
const API = {
  registerUser: (data) => axios.post('/api/auth/create', data),
  authenticateUser: (data) => axios.post('/api/auth/login', data),
  getSummonerInfo: (summonerName, token) => axios.post('/api/summoner/info', {summonerName}, { headers: {'x-access-token': token}}),
  getTournamentInfo: () => axios.get('/api/liquidpedia/tournaments'),
  getMatchInfoById: (id, token) => axios.post('/api/summoner/match', {id},  { headers: {'x-access-token': token}})
}

export default API;