const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const client = require('../db');

const user = {
  createUser: async (data) => {
    try {
      let db = await client;
      let collection = db.collection('auth');
      const hash = await bcrypt.hash(data.password, 10);
      let res = await collection.findOne({ username: data.username });
      if (res === null) {
        await collection.insertOne({ ...data, password: hash });
        return { status: 200, data: 'Account Created Successfully' };
      }
      return { status: 409, data: 'Username already in use' };
    } catch (e) {
      return { status: 500, data: e.message };
    }
  },
  authenticateUser: async (data) => {
    try {
      let db = await client;
      let collection = db.collection('auth');
      let account = await collection.findOne({ username: data.username });
      if (account !== null) {
        const success = await bcrypt.compare(data.password, account.password);
        if (success) {
          const { password, ...rest } = account;
          const token = jwt.sign({ username: data.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
          return { status: 200, data: { token, ...rest } };
        }
        return { status: 401, data: 'Invalid Credentials' };
      }
      return { status: 404, data: 'Account not found' };
    } catch (e) {
      return { status: 500, data: e.message };
    }
  },
};

module.exports = user;