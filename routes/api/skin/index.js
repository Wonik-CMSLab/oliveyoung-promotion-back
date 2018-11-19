const router = require('express').Router();
const controller = require('./skin.controller');

router.post('', controller.saveSkinType);


module.exports = router;
