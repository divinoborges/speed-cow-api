const express = require('express');
const router = express.Router();

const {Vaca, Filial} = require('../models');

router.delete('/:id', async function (req, res) {
    try{
        let vaca = await Vaca.findById(req.params.id);
        let filial = await Filial.findById(vaca.filial);
        await Vaca.findByIdAndDelete(req.params.id);
        await Filial.findOneAndUpdate({_id: filial._id}, { $set: {rebanho: filial.rebanho-1}});
        return res.status(200).json(req.body); 
    }catch(error) {
        console.log(error);
        return res.status(500).send(error);
    }  
});

module.exports = router;


