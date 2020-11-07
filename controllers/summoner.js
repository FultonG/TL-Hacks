const axios = require('axios');

const summoner = {
  getInfoByName: async (data) => {
    try {
      let res = await axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${data.summonerName}`,{headers: {'X-Riot-Token': process.env.RIOT_API_KEY}})
      return { status: 200, data: res.data };
    } catch (e) {
      console.log(e)
      return { status: 500, data: e.message };
    }
  },
};

module.exports = summoner;