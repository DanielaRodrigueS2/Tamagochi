const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const authAdmin = require('../middlewares/authAdmin')
const TamagochiController = require('../controllers/TamagochiController');

router.get('/tamagochi', authAdmin, TamagochiController.getAllTamagochis);
router.post('/tamagochi', auth, TamagochiController.createTamagochi);
router.get('/tamagochi', auth, TamagochiController.getTamagochiById);
router.put('/tamagochi', auth, TamagochiController.updateTamagochi);
router.delete('/tamagochi', auth, TamagochiController.deleteTamagochi); 

module.exports = router;