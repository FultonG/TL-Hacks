const axios = require('axios');
var qs = require('qs');

const liquidpedia = {
  getTournaments: async () => {
    try {
      let data = qs.stringify({
        'apikey': process.env.LIQUIDPEDIA_API_KEY,
        'wiki': 'leagueoflegends'
      });

      let res = await axios.post('https://api.liquipedia.net/api/v1/tournament', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
      return { status: 200, data: res.data };
    } catch (e) {
      console.log(e)
      return { status: 500, data: e.message };
    }
  },
};

module.exports = liquidpedia;