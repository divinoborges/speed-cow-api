const mongoose = require('mongoose');

const vacaSchema = new mongoose.Schema({
    filial: String,
    dataEntrada: Date,
    peso: Number,
});

module.exports = vacaSchema;
