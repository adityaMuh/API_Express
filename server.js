const express = require('express');  //ini buat manggil dari express ke express
const logger = require('morgan');    // ini buat manggil dari morgan  ke 
const bodyParser = require('body-parser');
const app = express();
app.use(logger('dev'));           //midleware
app.use(bodyParser.urlencoded({extended: false}));       //midleware 

app.get('/', (req, res)=> {
 res.json({"message" : "Hello world!"});
});

app.listen(3000, ()=> {
    console.log('Node server listening on port 3000');
});
