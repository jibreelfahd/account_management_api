const { userExpense } = require('../models/userModel')

/* Getting all user expenses */
const user_expense = (req, res) => {
   res.json(userExpense);
}

/* Adding expenses */
const add_expense = (req, res) => {
   const addExpense = req.body;
   userExpense.forEach((add, index) => {
      userExpense.push(`Expense ${index}: N${addExpense}`);
   });
   res.status(201).res.json(userExpense);
}

/* Updating already existing expense */
const update_expense = (req, res) => {
   const expenseId = req.params.id;
   const updatedExpense = req.body;
   userExpense[expenseId] = updatedExpense;
   res.status(200).res.json(userExpense);
}

/* Adding all expenses */
const add_all_expenses = (req, res) => {
   const amount = userExpense.splice(0, 11);
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