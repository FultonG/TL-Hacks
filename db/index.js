
const { MongoClient } = require("mongodb");
let connection = new MongoClient(process.env.MONGO_URI, { useUnifiedTopology: true })
async function handleDBConnect() {
  try {
    let client = await connection.connect();
    let db = await client.db('teamliquid')
    console.log('DB Connected');
    return db;
  } catch(e) {
    console.log('Error connecting to the DB');
    console.error(e);
  }
}

let client = handleDBConnect();

module.exports = client;