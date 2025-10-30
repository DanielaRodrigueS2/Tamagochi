const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const authAdmin = require('../middlewares/authAdmin')
const TamagochiController = require('../controllers/TamagochiController');

router.get('/tamagochi', authAdmin, TamagochiController.getAllTamagochis);
router.post('/tamagochi', auth, TamagochiController.createTamagochi);
router.get('/tamagochi/:id', auth, TamagochiController.getTamagochiById);
router.put('/tamagochi/:id', auth, TamagochiController.updateTamagochi);
router.delete('/tamagochi/:id', auth, TamagochiController.deleteTamagochi); 

module.exports = router;