const mongoose = require('mongoose')
const Itens = require('./ItensModel')

const tamagochiData = new mongoose.Schema({
    nome: {type: String, required: true},
    fome: {type: Number, default: 50},
    energia: {type: Number, default: 50},
    felicidade: {type: Number, default: 50},
    sprite: {type: String, default: 'Ovo_normal.gif'},
    cliques: {type: Number, default: 0},
    dinheiro: {type: Number, default: 0},
    inventario: [{item : {type: moongoose.Schema.Types.ObjectId, ref: 'Itens'}, quantidade: {type: Number, default: 0}}],
    responsavel: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports  = mongoose.model('Tamagochi', tamagochiData);