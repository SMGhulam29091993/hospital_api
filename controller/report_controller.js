const Doctor = require('../model/doctor');
const Patient = require('../model/patient');
const Report = require('../model/report');

// Get reports by status
exports.getReportsByStatus = async (req, res) => {
    try {
      const { status } = req.params;
      const reports = await Report.find({ status });
      res.json(reports);
    } catch (err) {
      res.status(500).json({ error: 'An error occurred' });
    }
  };