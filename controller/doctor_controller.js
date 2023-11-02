const Doctor = require('../model/doctor');
const Patient = require('../model/patient');
const Report = require('../model/report');
const jwt = require('jsonwebtoken');
require('dotenv').config();



// Register a new doctor
module.exports.register = async (req, res) => {
    try {
      const doctor = await Doctor.create(req.body);
      await doctor.save();
      res.status(201).json({ message: 'Doctor registered successfully' });
    } catch (err) {
      res.status(500).json({ error: 'An error occurred' });
    }
  };
  
  // Doctor login
module.exports.login = async (req, res) => {
    try{
      let user = await Doctor.findOne({email : req.body.email});

      if (!user || user.password != req.body.password){
          return res.status(422).json({
              message : 'Invalid username/password'
          })
      }
      return res.status(200).json({
          message : 'Successfully signed in and here is your token',
          data : {
              token : jwt.sign(user.toJSON(),process.env.SECRETORKEY, {expiresIn : 100000})
          }
  })
  }catch(err){
      console.log(`Error in finding the user ${err}`);
      return res.status(500).json({
          message : 'Internal Server Error'
      })
  }
}

  