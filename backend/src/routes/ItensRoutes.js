const express = require('express');
const router = express.Router();
const authAdmin = require('../middlewares/authAdmin')
const ItensController = require('../controllers/ItensController');

router.get('/itens', ItensController.getAllItens);
router.post('/itens', authAdmin, ItensController.createItem);
router.get('/itens/:tipo', ItensController.getItensByTipo);

module.exports = router;