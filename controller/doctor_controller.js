const Doctor = require('../model/doctor');
const Patient = require('../model/patient');
const Report = require('../model/report');




// Register a new doctor
module.exports.register = async (req, res) => {
    try {
      const { email, password, name, specialization } = req.body;
      // Hash the password before saving it in the database
      const doctor = new Doctor({ email, password, name, specialization });
      await doctor.save();
      res.status(201).json({ message: 'Doctor registered successfully' });
    } catch (err) {
      res.status(500).json({ error: 'An error occurred' });
    }
  };
  
  // Doctor login
module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    const doctor = await Doctor.findOne({ email });
  
    if (!doctor || doctor.password !== password) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
  
    const token = jwt.sign({ username: doctor.username }, 'your-secret-key'); // Replace with a secret key
    res.json({ token });
  };