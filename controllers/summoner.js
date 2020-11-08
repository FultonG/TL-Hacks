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
        let {name, ...rest} = res.data;
        await collection.insertOne({...rest, summonerName: name});
        return { status: 200, data: res.data };
      } else {
      return { status: 200, data: res };
      }
    } catch (e) {
      console.log(e)
      return { status: 500, data: e.message };
    }
  },
};

module.exports = summoner;