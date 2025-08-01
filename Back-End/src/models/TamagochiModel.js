const mongoose = require('mongoose')

const tamagochiData = new mongoose.Schema({
    nome: String,
    fome: Number,
    energia: Number,
    felicidade: Number,
    sprite: String
});

module.exports  = mongoose.Model('Tamagochi', tamagochiData);