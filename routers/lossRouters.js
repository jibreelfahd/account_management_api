const express = require('express');
const router = express.Router();

const { loss } = require('../controllers/lossController');

/* Getting the loss incured */
router.get('/income/gross-income', loss);

module.exports = router;