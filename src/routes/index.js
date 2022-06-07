const { Router } = require('express');
const router = Router();
const { getAllDogs,getDogById,createDog,getOnlyCreate,getByPeso } = require('../controllers/dog');
const { getAllTemperaments,getDogsByTemp } = require('../controllers/temperament');
// Ejemplo: const authRouter = require('./auth.js');




router.get('/dogs',getAllDogs);
router.get('/dogs/:id',getDogById);
router.get('/dogs/temperaments/:temperament',getDogsByTemp);
router.get('/dogs/get/created',getOnlyCreate);
router.get('/temperaments',getAllTemperaments);
router.get('/dogs/order/peso',getByPeso);
router.post('/dogs',createDog);

module.exports = router;
