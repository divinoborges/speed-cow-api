const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const createVaca = require('./routers/createVaca');
const readVaca = require('./routers/readVaca');
const updateVaca = require('./routers/updateVaca');
const deleteVaca = require('./routers/deleteVaca');
const filiais = require('./routers/filiais');

const db = mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    app.use(cors());
    next();
});

app.use('/vaca', createVaca, updateVaca, deleteVaca);
app.use('/vacas', readVaca);
app.use('/filial', filiais);

app.get('/', function (req, res){
    res.status(303).redirect('/vaca');
});

app.listen(3000, function (){
    console.log('API funcionando em http://localhost:3000');
});
