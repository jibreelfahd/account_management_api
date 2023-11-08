const { userExpense } = require('../models/userModel')


/* Getting the gross-income */
const loss = (req, res) => {
   const amount = userExpense.splice(0, 1);
   const allExpense = amount.reduce((acc, prevValue) => {
      acc + prevValue, 0
   });
   if (userExpense > allExpense) {
      res.status(200).res.json(allExpense);
   }
}

module.exports = { loss };