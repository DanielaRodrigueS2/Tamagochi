const mongoose = require('mongoose')

const itensData = new mongoose.Schema({
    nome: {type: String, required: true},
    tipo: {type: Number, required: true},
    energia: {type: Number, default: 0},
    felicidade: {type: Number, default: 0},
    fome: {type: Number, default: 0},
    sprite: {type: String, default: 'path'},
});

module.exports  = mongoose.model('Itens', itensData);