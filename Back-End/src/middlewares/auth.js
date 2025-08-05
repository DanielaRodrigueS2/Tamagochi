const jwt = require('jsonwebtoken');

module.exports = (req,res,next) =>{

    const authHeader = req.headers.authorization;

    if(!authHeader) return res.status(401).json({erro: 'Token nãp foi fornecido ou encontrado'});

    const token = authHeader.split(' ')[1];

    try{
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedToken;
        next();
    }
    catch(erro){
        return res.status(401).json({erro: 'Token inválido'});
    }

}