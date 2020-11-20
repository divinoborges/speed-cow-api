const express = require('express');
const router = express.Router();
const {Vaca} = require('../models');

router.get('/:id', async function (req, res) {

    await Vaca.find({filial: req.params.id}).then(r => {
        return res.status(200).json(r);
    }).catch(err => {
        return res.status(500).send(err);
    });
});

router.get('/', async function (req, res) {

    await Vaca.find({}).then(r => {
        return res.status(200).json(r);
    }).catch(err => {
        return res.status(500).send(err);
    });
});

module.exports = router;


