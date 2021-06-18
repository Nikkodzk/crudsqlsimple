const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');


router.get('/', customerController.list );

router.post('/add', customerController.save );

router.get('/delete/:id', customerController.delete );

router.get('/edit/:id', customerController.edit );

router.post('/actualizar/:id', customerController.actualizar );


module.exports = router;