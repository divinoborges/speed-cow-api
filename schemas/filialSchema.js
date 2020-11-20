const mongoose = require('mongoose');

const filialSchema = new mongoose.Schema({
    nome: String,
    rebanho: Number,
    cidade: String
});

module.exports = filialSchema;
