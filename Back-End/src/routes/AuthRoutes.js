const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const {body} = require('express-validator')
const auth = require('../middlewares/auth');

router.post('/register', [
    body('nome').notEmpty(),
    body('email').isEmail(),
    body('senha').isLength({min: 6, max: 30})
], AuthController.register)

router.post('/login', AuthController.login);
router.get('/validade', auth, AuthController.validate)

module.exports = router;