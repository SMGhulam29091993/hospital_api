const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;

db.on('Error', console.error.bind(console, 'Error in connecting the db'));

db.once('open', ()=>{
    console.log('Connection with the db is done')
});

module.exports = db;