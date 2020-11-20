const express = require('express');
const router = express.Router();

const {Vaca} = require('../models');

router.put('/:id', async function (req, res) {

    await Vaca.findOneAndUpdate({_id: req.params.id}, { $set: req.body}).then(r => {
        return res.status(200).json(r);
    }).catch(error => {
    console.log(error);
        return res.status(500).send(error);
    });
});

module.exports = router;


