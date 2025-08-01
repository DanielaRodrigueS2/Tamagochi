const mongoose = require('mongoose');
const bycrpt = require('bcrypt');

const userData = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
        unique: true
    },
    senha:{
        type: String,
        required: true
    }

})

userData.pre('save', async function(next) {
    if(!this.isModified('senha')) return next();
    try{
        const salt = await bycrpt.genSalt(10);
        this.senha= await bycrpt.hash(this.senha, salt);
        next();
    }
    catch(error){
        next(erro);
    }
}) 

userData.methods.compararSenha = function(senhaInserida){
    return bycrpt.compare(senhaInserida, this.senha);
};

module.exports = mongoose.model('User', userData)