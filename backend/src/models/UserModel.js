const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userData = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    senha:{
        type: String,
        required: true
    },
    tamagochi: {type: mongoose.Schema.Types.ObjectId, ref: 'Tamagochi', default: null}

})

userData.pre('save', async function(next) {
    if(!this.isModified('senha')) return next();
    try{
        const salt = await bcrypt.genSalt(10);
        this.senha= await bcrypt.hash(this.senha, salt);
        next();
    }
    catch(error){
        next(erro);
    }
}) 

userData.methods.compararSenha = function(senhaInserida){
    return bcrypt.compare(senhaInserida, this.senha);
};

module.exports = mongoose.model('User', userData)