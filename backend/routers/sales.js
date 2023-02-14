const { Router } = require('express');
const router = Router();

const salesController = require('../controllers/sales');
const fieldsController = require('../controllers/fields');

router.get('/sales', salesController.getSales);
router.post('/sales', salesController.newSale);

router.get('/fields', fieldsController.getFields);

module.exports = router;
