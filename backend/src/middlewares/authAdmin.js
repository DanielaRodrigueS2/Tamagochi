module.exports = function(req,res, next){

    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (token === process.env.ADMIN_TOKEN){
        return next();
    }

    return res.status(403).json({error: 'Acesso negado, token de adm inválido'});

}