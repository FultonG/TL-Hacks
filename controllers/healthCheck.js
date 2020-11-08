const client = require('../db');

const healthCheck = {
  addHealthCheck: async (data) => {
    try {
      let db = await client;
      let collection = db.collection('healthCheck');
      let res = await collection.updateOne({ uId: data.uId, summonerName: data.summonerName }, {$set: {...data}}, {upsert: true});
      return {status: 200, data: res};
    } catch (e) {
      console.log(e)
      return { status: 500, data: e.message };
    }
  }
};

module.exports = healthCheck;