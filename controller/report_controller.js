const Doctor = require('../model/doctor');
const Patient = require('../model/patient');
const Report = require('../model/report');

// Get reports by status
exports.getReportsByStatus = async (req, res) => {
  try {
    // Assuming req.params.status is the status you want to filter by
    const status = req.params.status;

    const reports = await Report.find({ status: status });
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred' });
  }
};