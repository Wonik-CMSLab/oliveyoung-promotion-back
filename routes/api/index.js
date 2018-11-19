const router = require('express').Router();

const skin = require('./skin');
// const authMiddleware = require('../../middlewares/auth');

router.use('/skin', skin);

module.exports = router;
