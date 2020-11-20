const mongoose = require('mongoose');

const vacaSchema = require('../../schemas/vacaSchema');

const Vaca = mongoose.model('Vaca', vacaSchema);

module.exports = Vaca;
