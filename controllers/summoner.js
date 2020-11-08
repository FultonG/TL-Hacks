const axios = require('axios');
const client = require('../db');

const summoner = {
  getInfoByName: async (data) => {
    try {
      let db = await client;
      let collection = db.collection('summoner');
      let res = await collection.findOne({ summonerName: data.summonerName });
      if (res === null) {
        res = await axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${data.summonerName}`, { headers: { 'X-Riot-Token': process.env.RIOT_API_KEY } })
        let { name, ...rest } = res.data;
        res = await axios.get(`https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${rest.accountId}`, { headers: { 'X-Riot-Token': process.env.RIOT_API_KEY } });
        let champions = await axios.get('http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json');
        let matches = res.data.matches.map(match => ({...match, champion: findChampion(champions.data.data,match.champion)}))
        await collection.insertOne({ ...rest, matches, summonerName: name });
        return { status: 200, data: { ...rest, matches, summonerName: name }};
      } else {
        return { status: 200, data: res };
      }
    } catch (e) {
      console.log(e)
      return { status: 500, data: e.message };
    }
  },
  getMatchesBySummoner: async (data) => {
    try {
      let db = await client;
      let collection = db.collection('summoner');
      let res = await axios.get(`https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${data.accountId}`, { headers: { 'X-Riot-Token': process.env.RIOT_API_KEY } });
      let champions = await axios.get('http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json');
      let matches = res.data.matches.map(match => ({...match, champion: findChampion(champions.data.data,match.champion)}))
      await collection.updateOne({ accountId: data.accountId }, { $set: { matches: matches } });
      return { status: 200, data: res.data };
    } catch (e) {
      console.log(e)
      return { status: 500, data: e.message };
    }
  },
  getMatchesInfoById: async (data) => {
    try {
      let res = await axios.get(`https://na1.api.riotgames.com/lol/match/v4/matches/${data.id}`, { headers: { 'X-Riot-Token': process.env.RIOT_API_KEY } });
      return { status: 200, data: res.data };
    } catch (e) {
      console.log(e)
      return { status: 500, data: e.message };
    }
  }
};

function findChampion(obj, key) {
  for (const property in obj) {
    if(obj[property].key === key.toString()){
      return obj[property];
    }
  }
  return key;
}

module.exports = summoner;