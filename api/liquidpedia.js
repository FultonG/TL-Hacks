const router = require('express').Router();
const liquidpedia = require('../controllers/liquidpedia');

router.get('/tournaments', async (req, res) => {
  const { status, data } = await liquidpedia.getTournaments();
  res.status(status).send(data);
});

module.exports = router;