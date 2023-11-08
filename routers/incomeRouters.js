const express = require('express');
const router = express.Router();

const { user_income, add_user_income, update_income, add_all_income } = require('../controllers/incomeController')


/* Get all expense route */
router.get('/income', user_income);

/* Adding more expenses */
router.post('/income/add-expense', add_user_income);

/* Updating an expense */
router.put('/income/update-income/:id', update_income);

/* Adding all expenses */
router.get('/income/sum', add_all_income);

module.exports = router;