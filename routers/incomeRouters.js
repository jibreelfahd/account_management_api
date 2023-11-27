const express = require('express');
const router = express.Router();

const userAuth = require('../middlewares/userAuth');
const { checkMaxIncome } = require('../middlewares/maxCapacity');
const { user_income, add_user_income, update_income, add_all_income } = require('../controllers/incomeController');

/* Get all expense route */
router.get('/', user_income);

/* Adding more expenses */
router.post('/add-income', add_user_income);

/* Updating an expense */
router.patch('/update-income/:id' ,update_income);

/* Adding all expenses */
router.get('/sum', add_all_income);

module.exports = router;