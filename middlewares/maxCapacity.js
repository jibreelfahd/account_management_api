const userIncome = require('../db/models/userIncomeModel')
const userExpense = require('../db/models/userExpenseModel')


exports.checkMaxIncome = (req, res, next) => {
   // if (userIncome.length >= 10) {
   //    res.status(401).json({success: false, message: 'Sorry you can add anymore income'});
   //    next();
   // }
}

exports.checkMaxExpense = (req, res, next) => {
   // if (userExpense.length >= 10) {
   //    res.status(401).json({success: false, message: 'Sorry you can add anymore income'})
   //    next();
   // }
}