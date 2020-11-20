const mongoose = require('mongoose');

const filialSchema = require('../../schemas/filialSchema');

const Filial = mongoose.model('Filial', filialSchema);

module.exports = Filial;
