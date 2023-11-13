const { userExpense } = require('../models/userModel')

/* Getting all user expenses */
const user_expense = (req, res) => {
   res.json(userExpense);
}

/* Adding expenses */
const add_expense = (req, res) => {
   const addExpense = req.body.expense;
   userExpense.push(`Expense: N${addExpense}`);
   res.status(201).json(userExpense);
}

/* Updating already existing expense */
const update_expense = (req, res) => {
   const expenseId = req.params.id;
   const updatedExpense = req.body;
   if (!expenseId) {
      res.status(400).json( {message: 'No expense with this id' });
   }
   userExpense[expenseId] = updatedExpense;
   res.status(200).json(userExpense);
}

/* Adding all expenses */
const add_all_expenses = (req, res) => {
   const amount = userExpense.slice(0, 11);
   const allSum = amount.reduce((acc, prevValue) => {
      acc + prevValue, 0
   });
   res.status(200).res.json(`Total Sum is: N${allSum}`);
}

module.exports = { 
   user_expense,
   add_expense,
   update_expense,
   add_all_expenses
}