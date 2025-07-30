const moongoose = require('moongose');

const tamagochiData = new moongoose.Schema({
    nome: String,
    fome: Number,
    energia: Number,
    felicidade: Number,
    sprite: String
});

const Tamagochi = moongoose.Model('Tamagochi', tamagochiData);

module.exports = Tamagochi;