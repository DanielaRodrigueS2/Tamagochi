const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const {body} = require('express-validator')

router.post('/register', [
    body('nome').notEmpty(),
    body('email').isEmail(),
    body('senha').isLength({min: 6, max: 30})
], AuthController.register)

router.post('/login', AuthController.login);

module.exports = router;