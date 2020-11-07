const router = require('express').Router();
const summoner = require('../controllers/summoner');

router.post('/info', async (req, res) => {
  const { status, data } = await summoner.getInfoByName(req.body);
  res.status(status).send(data);
});

module.exports = router;