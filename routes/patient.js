const express = require('express');
const router = express.Router();
const passport = require('passport');
const patientController = require('../controller/patient_controller');

router.post('/register',passport.authenticate(
    'jwt',
    {
        session : false
    }), patientController.register_patient);
router.post('/:id/create_report',passport.authenticate(
    'jwt',
    {
        session : false
    }),  patientController.createReport);
router.get('/:id/all_reports',  patientController.getAllReports);




module.exports = router;