const router = require('express').Router();
const auth = require('../controllers/auth');

router.post('/create', async (req, res) => {
  const { status, data } = await auth.createUser(req.body);
  res.status(status).send(data);
});

router.post('/login', async (req, res) => {
  const { status, data } = await auth.authenticateUser(req.body);
  res.status(status).send(data);
});

module.exports = router;