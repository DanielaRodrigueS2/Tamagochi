const Itens = require('../models/ItensModel');

exports.createItem = async (req, res) =>{
    const {nome, tipo, energia, felicidade, fome, sprite} = req.body;

    try{
        const item = new Itens({nome,tipo, energia, felicidade, fome, sprite});
        const itemCriado = await item.save();
        res.status(201).json(itemCriado)

    }
    catch(erro){
        res.status(500).json({msg: erro})
    }
}

exports.getAllItens = async (req,res) =>{
    try{
        const itens = await Itens.find();
        res.json(itens);
    }
    catch(erro){
        res.status(500).json({erro});
    }
}

exports.getItensByTipo = async  (req,res) =>{
    const tipo = req.params.tipo;
    try{
        const itens = await Itens.find().where('tipo').equals(tipo);
        res.json(itens)
    }
    catch(erro){
        res.status(500).json({erro});
    }   
}