const User = require('../models/UserModel');
const Tamagochi = require('../models/TamagochiModel');
const Token = require('../models/TokenModel');
const jwt = require('jsonwebtoken');
const sendMail = require('../services/mailer');
const {validationResult} = require('express-validator');

const crypto = require('crypto');
const bcrypt = require('bcrypt');
const { stack } = require('../app');
const URL = process.env.CLIENT_URL;

exports.register = async (req, res) =>{
    const erros = validationResult(req);
    if(!erros.isEmpty()) return res.status(400).json({errors: erros.array() });

    const {nome, email, senha} = req.body;

    try{
        const userExistente = await User.findOne({email});
        if(userExistente) return res.status(400).json({erro: 'Email já cadastrado'});

        const novoUsuario = new User({nome, email, senha});
        await novoUsuario.save();

        const novoTamagochi = new Tamagochi({
            nome: 'Tamagochi',
            responsavel: novoUsuario._id
        })

        await novoTamagochi.save();

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
        if(!usuario) return res.status(400).json({erro: 'Email não encontrado'})

        const senhaCorreta = await usuario.compararSenha(senha);
        if(!senhaCorreta) return res.status(400).json({erro: 'Senha incorreta'});

        const token = jwt.sign(
            {id: usuario._id, nome: usuario.nome},
            process.env.JWT_SECRET,
            {expiresIn: '4h'}

        );

        let tamagochi = await Tamagochi.findOne({
            responsavel: usuario._id
        })

        if(!tamagochi){
            let novoTamagochi = new Tamagochi({
                nome: 'Tamagochi',
                responsavel: usuario._id
            })

            await novoTamagochi.save();
        }



        res.json({token, usuario:{id: usuario._id, nome: usuario.nome}, tamagochi})
    }
    catch(erro){
        console.log(erro);
        res.status(500).json({erro: 'Erro ao realizar o login'});
    }
};

exports.validate = async (req, res) => {

    try{
        const user = await User.findById(req.user.id).select("senha");
        if(!user){
            return res.status(404).json({error: 'Usuário não encontrado'});
        }
        res.json(user);
    }
    catch(erro){
        res.status(500).json({error: "Erro interno do server"});
    }
};

exports.resetPasswordRequest = async (req, res, next) =>{
    const {email} = req.body;

    try{
        const user = await User.findOne({email});
        if (!user) return res.status(404).json({mensagem: 'Usuário não encontrado'})

        const token = await Token.findOne({userId: user._id});
        if(token) await token.deleteOne();

        let tokenReset = crypto.randomBytes(32).toString('hex');
        const hash = await bcrypt.hash(tokenReset, 10)

        await new Token({
            userId: user._id,
            token: hash,
            createdAt: Date.now(),
        }).save();

        const link= `${URL}/passwordReset?token=${tokenReset}&id=${user._id}`;
        await sendMail(user.email, link);

        return res.status(200).json({mensagem: 'Email enviado com sucesso'});
    }
    catch(error){
        console.error(error)
        return res.status(500).json({
            message: error.message,
            stack: error.stack
        });
    }
}

exports.resetPassword = async (req, res) =>{

    const {id, token} = req.params;

    const {senha} = req.body;

    try{

        if (!senha || senha.lenght < 6){
            return res.status(400).json({erro: 'Senha muito curta'});
        }

        let passwordResetToken = await Token.findOne({userId: id});
        if (!passwordResetToken) return res.status(404).json({erro: 'Token não expirado ou inválido'});

        const verificacao = await bcrypt.compare(token, passwordResetToken.token);
        if (!verificacao) return res.status(404).json({erro: 'Token não expirado ou inválido'});

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(senha, salt);

        await User.updateOne(
            {_id: id},
            {$set: {senha: hash}},
            {new: true}
        );

        await passwordResetToken.deleteOne();
        return res.status(200).json({message: 'Senha trocada com sucesso'});
    }   
    catch(error){
        return res.status(500).json({error});
    }

}