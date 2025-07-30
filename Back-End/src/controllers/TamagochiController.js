const Tamagochi = require('../models/TamagochiModel');

exports.createTamagochi = async (req,res) =>{
    const {nome, fome, energia, felicidade, sprite} = req.body;

    try{
        const tamagochi = new Tamagochi({nome, fome, energia, felicidade, sprite});
        const tamagochiCriado = await tamagochi.save();
        res.status(201).json(tamagochiCriado);
    }
    catch(erorr){
        res.status(500).json({error: 'Ocorreu um erro ao criar o Tamagochi'});
    }
};

exports.getAllTamagochis = async (req, res) =>{
    try{
        const tamagochis = await Tamagochi.find();
        res.json(tamagochis)
    }
    catch(error){
        res.status(500).json({error: 'Erro ao retornar tamagochis'})
    }
}