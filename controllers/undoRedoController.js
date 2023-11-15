const { add_user_income } = require('./incomeController');
const { add_expense } = require('./expenseController');
const { userIncome, userExpense } = require('../models/userModel');

/* Updating the stack array, redo and undo array */
const array = [];
const undoArray = [[]];
const redoArray = [];

/* Controller for undo and redo income */
exports.undoIncome = (req, res) => {
   array.push(add_user_income);
   undoArray.push([...array]);
   redoArray.length = 0;

  if (undoArray.length > 1) {
    redoArray.push(undoArray.pop());
    array.splice(0, array.length, ...undoArray[undoArray.length - 1]);
  }
  
  res.status(201).json(userIncome);

} 

exports.redoIncome = (req, res) => {
  array.push(add_user_income);
  undoArray.push([...array]);
  redoArray.length = 0;
    
  if (redoArray.length > 0) {
    undoArray.push(redoArray.pop());
    array.splice(0, array.length, ...undoArray[undoArray.length - 1]);
  }
  res.status(201).json(userIncome);
}

/* Controller for undo/redo expense */
exports.undoExpense = (req, res) => {
   array.push(add_expense);
   undoArray.push([...array]);
   redoArray.length = 0;

  if (undoArray.length > 1) {
    redoArray.push(undoArray.pop());
    array.splice(0, array.length, ...undoArray[undoArray.length - 1]);
  }

  res.status(201).json(userExpense);
  
}

exports.redoExpense = (req, res) => {
  array.push(add_expense);
  undoArray.push([...array]);
  redoArray.length = 0;

  if (redoArray.length > 0) {
    undoArray.push(redoArray.pop());
    array.splice(0, array.length, ...undoArray[undoArray.length - 1]);
  }

  res.status(201).json(userExpense);

}

