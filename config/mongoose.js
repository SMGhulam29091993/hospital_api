const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/hospital_api_db');

const db = mongoose.connection;

db.on('Error', console.error.bind(console, 'Error in connecting the db'));

db.once('open', ()=>{
    console.log('Connection with the db is done')
});

module.exports = db;