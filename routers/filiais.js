const express = require('express');
const router = express.Router();

const {Filial} = require('../models');

router.get('/:id', async function (req, res) {

    await Filial.findById(req.params.id).then(r => {
        return res.status(200).json(r);
    }).catch(error => {
        return res.status(500).send(error);
    });
});

router.get('/', async function (req, res) {

    await Filial.find({}).then(r => {
        return res.status(200).json(r);
    }).catch(error => {
        return res.status(500).send(error);
    });
});

module.exports = router;


