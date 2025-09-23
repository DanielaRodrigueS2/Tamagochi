const User = require('../models/UserModel');
const Tamagochi = require('../models/TamagochiModel');

exports.getUser = async (req, res) =>{
    const uid = req.params.id;
    try{
        const user = await User.findById(uid);
        if(!user){
            res.status(404).json({erro: 'Erro ao encontrar tamagochi'});
        }
        res.json(user);
    }
    catch(erro){
        res.status(500).json({erro: 'Erro ao retonar user',  erro});
    }

}

exports.getTamagochiByUserId = async (req, res) =>{
    const responsavel = req.params.id;
    try{
        const tamagochi = await Tamagochi.findOne({responsavel});
        if(!tamagochi){
            res.status(404).json({erro: 'Tamagochi não encontrado'});
        }
        res.json(tamagochi)
    }
    catch(erro){
        res.status(500).json({erro})
    }

}