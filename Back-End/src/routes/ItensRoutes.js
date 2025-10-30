const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const authAdmin = require('../middlewares/authAdmin')
const ItensController = require('../controllers/ItensController');

router.get('/itens', auth, ItensController.getAllItens);
router.post('/itens', authAdmin, ItensController.createItem);
router.get('/itens/:tipo', auth, ItensController.getItensByTipo);

module.exports = router;