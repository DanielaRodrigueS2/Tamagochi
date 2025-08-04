const mongoose = require('mongoose')

const tamagochiData = new mongoose.Schema({
    nome: {type: String, required: true},
    fome: {type: Number, default: 100},
    energia: {type: Number, default: 100},
    felicidade: {type: Number, default: 100},
    sprite: {type: Number, default: 0},
    responsavel: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports  = mongoose.Model('Tamagochi', tamagochiData);