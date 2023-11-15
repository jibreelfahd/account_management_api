const userIncome = require('../models/userModel')
const userExpense = require('../models/userModel')


exports.checkMaxIncome = (req, res, next) => {
   if (userIncome >= 10) {
      res.status(401).json({success: false, message: 'Sorry you can add anymore income'});
      next();
   }
}

exports.checkMaxExpense = (req, res, next) => {
   if (userExpense >= 10) {
      res.status(401).json({success: false, message: 'Sorry you can add anymore income'})
      next();
   }
}