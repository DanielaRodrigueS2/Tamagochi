require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect(process.env.MONGO_URI,)
.then(() =>{
    console.log('Conexão com MongoBd foi feita :3');
    app.listen(process.env.PORT || 3000, () => {
        console.log('Servidor foi ligado na porta 3000')
    });
})
.catch((err) =>{
    console.error('Erro ao se conectar com o MongoDb ;-;,', err.message);
})
