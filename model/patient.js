const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : Number,
        required : true
    },
    age : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    }
}, {
    timestamps : true
});

const Patient = new mongoose.model('Patient', patientSchema);

module.exports = Patient;