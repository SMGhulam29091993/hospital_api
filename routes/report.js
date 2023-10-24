const express = require('express');
const router = express.Router();

const reportController = require('../controller/report_controller');

router.get('/:status',reportController.getReportsByStatus);

module.exports = router;