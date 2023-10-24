const Doctor = require('../model/doctor');
const Patient = require('../model/patient');
const Report = require('../model/report');

// Register a new patient
module.exports.register_patient = async (req, res) => {
    try {
      const { phoneNumber, name, age, gender } = req.body;
      let patient = await Patient.findOne({ phoneNumber });
      
      if (!patient) {
        patient = new Patient({ phoneNumber, name, age, gender });
        await patient.save();
      }
  
      res.status(201).json({ message: 'Patient registered successfully', patient });
    } catch (err) {
      res.status(500).json({ error: 'An error occurred' });
    }
  };

  // Create a patient report
module.exports.createReport = async (req, res) => {
    try {
        const { id } = req.params;
        const { doctor, status } = req.body;
        const report = new Report({ patient: id, doctor, status, date: new Date() });
        await report.save();
        res.status(201).json({ message: 'Report created successfully', report });
    } catch (err) {
        res.status(500).json({ error: 'An error occurred' });
    }
};
  
  // Get all reports of a patient
module.exports.getAllReports = async (req, res) => {
    try {
        const { id } = req.params;
        const reports = await Report.find({ patient: id }).sort({ date: 1 });
        res.json(reports);
    } catch (err) {
        res.status(500).json({ error: 'An error occurred' });
    }
};
  