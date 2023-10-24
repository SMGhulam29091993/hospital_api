const express = require('express');
const router = express.Router();

const userController = require('../controller/user_controller');

router.get('/', userController.test);
router.use('/doctor', require('./doctor'));
router.use('/patient', require('./patient'));
router.use('/report',require('./report'));


module.exports = router;