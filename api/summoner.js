const router = require('express').Router();
const summoner = require('../controllers/summoner');

router.post('/info', async (req, res) => {
  const { status, data } = await summoner.getInfoByName(req.body);
  res.status(status).send(data);
});

router.post('/matches', async (req, res) => {
  const { status, data } = await summoner.getMatchesBySummoner(req.body);
  res.status(status).send(data);
});

router.post('/match', async (req, res) => {
  const {status, data} = await summoner.getMatchesInfoById(req.body);
  res.status(status).send(data);
})

module.exports = router;