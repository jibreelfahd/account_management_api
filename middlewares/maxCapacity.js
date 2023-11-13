const userIncome = require('../models/userModel')
const userExpense = require('../models/userModel')


const checkMaxIncome = (req, res) => {
   if (userIncome >= 10) {
      res.status(401).json({success: false, message: 'Sorry you can add anymore income'})
   }
}

const checkMaxExpense = (req, res) => {
   if (userExpense >= 10) {
      res.status(401).json({success: false, message: 'Sorry you can add anymore income'})
   }
}

module.exports = {
   checkMaxExpense,
   checkMaxIncome
}