const express = require('express');
const router = express.Router();

const { gross_income } = require('../controllers/grossIncomeController');

/* Getting the gross income value */
router.get('/income/gross-income', gross_income);

module.exports = router;
