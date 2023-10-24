const express = require('express');
const router = express.Router();
const passport = require('passport')
const reportController = require('../controller/report_controller');

router.get('/:status', passport.authenticate('jwt', { session: false }),reportController.getReportsByStatus);

module.exports = router;