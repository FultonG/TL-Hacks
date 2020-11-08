const router = require('express').Router();
const healthCheck = require('../controllers/healthCheck');

router.post('/add', async (req, res) => {
  const { status, data } = await healthCheck.addHealthCheck(req.body);
  res.status(status).send(data);
});

module.exports = router;