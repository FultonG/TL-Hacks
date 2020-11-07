const router = require("express").Router();
const authRoutes = require('./auth');
const summonerRoutes = require('./summoner');
const authMiddleware = require('../middleware/auth');

router.use("/auth", authRoutes);
router.use("/summoner",authMiddleware.checkToken, summonerRoutes);

module.exports = router;