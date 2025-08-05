const Tamagochi = require('../models/TamagochiModel');
const User = require('../models/UserModel');

exports.createTamagochi = async (req,res) =>{
    const {nome, fome, energia, felicidade, sprite} = req.body;
    const userId = req.user.id;

    try{
        const tamagochi = new Tamagochi({nome, fome, energia, felicidade, sprite, responsavel: userId});
        const tamagochiCriado = await tamagochi.save();

        await User.findByIdAndUpdate(userId, {tamagochi: tamagochiCriado._id});
        res.status(201).json(tamagochiCriado);
    }
    catch(erorr){
        res.status(500).json({error: 'Ocorreu um erro ao criar o Tamagochi'});
    }
};

exports.getAllTamagochis = async (req, res) =>{
    try{
        const tamagochis = await Tamagochi.findById();
        res.json(tamagochis)
    }
    catch(error){
        res.status(500).json({error: 'Erro ao retornar tamagochis'})
    }
}

exports.getTamagochiById = async (req, res) =>{
    const id = req.params.id;
    try{
        const tamagochi = await Tamagochi.findById(id);
        if(!tamagochi){
            return res.status(404).json({error: 'Tamagochi nao foi encontrado'});
        }

        res.json(tamagochi);
    }
    catch(error){
        res.status(500).json({error: 'Erro ao retornar tamagochi'})
    }
}

exports.updateTamagochi = async (req, res) =>{
    const id = req.params.id;
    const {nome, fome, energia, felicidade, sprite} = req.body;

    try{
        const tamagochiUpdate = await Tamagochi.findByIdAndUpdate(id, {nome,fome,energia,felicidade,sprite}, {new: true});
        if(!tamagochiUpdate){
            return res.status(404).json({erorr: 'Tamagochi não encontrado'})
        }
        res.json(tamagochiUpdate)
    }
    catch(error){
        res.status(500).json({error: 'Erro ao atualizar as informações do tamagochi'})
    }

}

exports.deleteTamagochi = async (req, res) =>{
    const id = req.params.id;

    try{
        const tamagochiApagado = await Tamagochi.findByIdAndRemove(id);
        if(!tamagochiApagado){
            return res.status(404).json({error: 'Tamagochi não encontrado'});
        }
        res.json(tamagochiApagado)
    }
    catch(error){
        res.status(500).json({error: 'Erro ao excluir tamagochi'});
    }
}