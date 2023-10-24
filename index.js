const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;
const app = express();

const db = require('./config/mongoose');


app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use('/', require('./routes'));

app.listen(port, (err)=>{
    if(err){
        console.log(`An Error has occured in runing the server ${err}!`);
        return;
    }
    return console.log(`The express server is up and running on port : ${port}`);
})