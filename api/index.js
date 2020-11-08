const router = require("express").Router();
const authRoutes = require('./auth');
const summonerRoutes = require('./summoner');
const healthCheckRoutes = require('./healthCheck');
const liquidpediaRoutes = require('./liquidpedia');
const authMiddleware = require('../middleware/auth');

router.use("/auth", authRoutes);
router.use("/liquidpedia", liquidpediaRoutes);
router.use("/summoner",authMiddleware.checkToken, summonerRoutes);
router.use("/healthCheck",authMiddleware.checkToken, healthCheckRoutes);

module.exports = router;