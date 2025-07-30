const express = require('express');
const router = express.Router();
const TamagochiController = require('../controllers/TamagochiController');

router.get('/tamagochi', TamagochiController.getAllTamagochis);
router.post('/tamagochi', TamagochiController.createTamagochi);
router.get('/tamagochi/:id', TamagochiController.getTamagochiById);
router.put('/tamagochi/:id', TamagochiController.updateTamagochi);
router.delete('/tamagochi/:id', TamagochiController.deleteTamagochi); 

module.exports = router;