const mongoose = require('mongoose')

const tamagochiData = new mongoose.Schema({
    nome: {type: String, required: true},
    fome: {type: Number, default: 50},
    energia: {type: Number, default: 50},
    felicidade: {type: Number, default: 50},
    sprite: {type: Number, default: 0},
    cliques: {type: Number, default: 0},
    responsavel: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports  = mongoose.model('Tamagochi', tamagochiData);