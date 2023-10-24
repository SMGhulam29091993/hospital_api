const express = require('express');
const router = express.Router();

const patientController = require('../controller/patient_controller');

router.post('/register', patientController.register_patient);
router.post('/:id/create_report',  patientController.createReport);
router.get('/:id/all_reports',  patientController.getAllReports);




module.exports = router;