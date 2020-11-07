const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const auth = require('./middleware/auth');
const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

app.use('/api', require('./api'));

app.post('/', auth.checkToken, (req, res) => res.json({
  message: 'Posting!',
}));

app.listen(8080, () => {
  console.log('Server running');
});