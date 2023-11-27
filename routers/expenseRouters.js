const express = require('express');
const router = express.Router();

const userAuth = require('../middlewares/userAuth');
const { checkMaxExpense }  = require('../middlewares/maxCapacity');
const { user_expense, add_expense, update_expense, add_all_expenses } = require('../controllers/expenseController');

/* Middleware for checking max capacity */

/* Get all expense route */
router.get('/', user_expense);

/* Adding more expenses */
router.post('/add-expense', add_expense);

/* Updating an expense */
router.put('/update-expense/:id' ,update_expense);

/* Adding all expenses */
router.get('/sum', add_all_expenses);

module.exports = router;