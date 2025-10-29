const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const ItensController = require('../controllers/ItensController');

router.get('/itens', auth, ItensController.getAllItens);
router.post('/itens', auth, ItensController.createItem);
router.get('/itens/:tipo', auth, ItensController.getItensByTipo);

module.exports = router;