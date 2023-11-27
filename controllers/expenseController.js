const { sequelize } = require('../db/index');
const UserExpense = require('../db/models/userExpenseModel')

/* Getting all user expenses */
const user_expense = async (req, res) => {
   try {
      const getAll = await UserExpense.findAll();
      res.status(200).json({ success: true, getAll }); 
   } catch (err) {
      console.log('Error from get all instance', err);
   }
}

/* Adding expenses */
const add_expense = async (req, res) => {
   try {
      const { expense, desc } = req.body;
      const addExpense = await UserExpense.create({ expense, desc })
      res.status(201).json({ success: true, addExpense });
   } catch (err) {
      console.log('Error from add expense instance', err);
   }
}

/* Updating already existing expense */
const update_expense = (req, res) => {
  try {
   const { id: expenseId } = req.params;
   const { expense }= req.body;
   if (!expenseId) {
      res.status(400).json( {message: 'No expense with this id' });
   }
   
   const update = UserExpense.update(
      { expense: expense },
      { where : { id: expenseId }}
   )
   res.status(200).json({ success: true, update });
  } catch (err) {
   console.log('Error from update expense', err);
  }
}

/* Adding all expenses */
const add_all_expenses = async (req, res) => {
   try {
      if (!UserExpense) {
         res.status(400).json( {message: 'User expense is empty' });
      }
      
      const sumExpense = UserExpense.findAll({ 
         attributes: [
            'id',
            [sequelize.fn('sum'), sequelize.col('expense'), 'totalExpense']
         ],
         group: ['id'],
         raw: true
      });
      res.status(200).json({ success: true, sumExpense });
   } catch (err) {
      console.log('Error from sum expense', err);
     }
}

module.exports = { 
   user_expense,
   add_expense,
   update_expense,
   add_all_expenses
}