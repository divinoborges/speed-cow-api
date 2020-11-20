const express = require('express');
const router = express.Router();

const {Vaca, Filial} = require('../models');

router.post('/', async function (req, res) {      
    try{
        let filial = await Filial.findById(req.body.filial);
        if(filial.rebanho < 200){
            await Vaca.create(req.body);
            await Filial.findOneAndUpdate({_id: filial._id}, { $set: {rebanho: filial.rebanho+1}});
            return res.status(201).json(req.body);
        }
        return res.status(400).send('Limite de 200 vacas');
    }catch(error) {
        console.log(error);
        return res.status(500).send(error);
    }  
   
});

module.exports = router;

