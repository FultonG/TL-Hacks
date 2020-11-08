const client = require('../db');
const language = require('@google-cloud/language');

const healthCheck = {
  addHealthCheck: async (data) => {
    try {
      let db = await client;
      let collection = db.collection('healthCheck');

      // Creates a client
      const client = new language.LanguageServiceClient();
      const document = {
        content: text,
        type: 'PLAIN_TEXT',
      };

      // Detects the sentiment of the document
      const [result] = await client.analyzeSentiment({ document });

      const sentiment = result.documentSentiment;
      let res = await collection.updateOne({ uId: data.uId, summonerName: data.summonerName }, { $set: { ...data, sentimentScore: sentiment.score } }, { upsert: true });
      return { status: 200, data: res };
    } catch (e) {
      console.log(e)
      return { status: 500, data: e.message };
    }
  }
};

module.exports = healthCheck;