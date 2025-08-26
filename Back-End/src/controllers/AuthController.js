const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const {validationResult} = require('express-validator');

exports.register = async (req, res) =>{
    const erros = validationResult(req);
    if(!erros.isEmpty()) return res.status(400).json({errors: erros.array() });

    const {nome, email, senha} = req.body;

    try{
        const userExistente = await User.findOne({email});
        if(userExistente) return res.status(400).json({erro: 'Email já cadastrado'});

        const novoUsuario = new User({nome, email, senha});
        await novoUsuario.save();

        res.status(201).json({message: 'Usuário foi criado com sucesso :3'});
    }
    catch(erro){
        res.status(500).json({erro: 'Ocorrreu algum erro ao criar o usuaário'});
    }

};

exports.login = async (req,res) =>{
    const {email, senha} = req.body;

    try{
        const usuario = await User.findOne({email});
        if(!usuario) return res.status(400).josn({erro: 'Email não encontrado'})

        const senhaCorreta = await usuario.compararSenha(senha);
        if(!senhaCorreta) return res.status(400).json({erro: 'Senha incorreta'});

        const token = jwt.sign(
            {id: usuario._id, nome: usuario.nome},
            process.env.JWT_SECRET,
            {expiresIn: '4h'}

        );

        res.json({token, usuario:{id: usuario._id, nome: usuario.nome}})
    }
    catch(erro){
        console.log(erro);
        res.status(500).json({erro: 'Erro ao realizar o login'});
    }
}