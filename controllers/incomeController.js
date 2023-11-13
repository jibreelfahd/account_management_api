const { userIncome } = require('../models/userModel')

/* Getting the users income */
const user_income = (req, res) => {
   res.json(userIncome);
}

/* Adding the users income */
const add_user_income = (req, res) => {
   const addIncome = req.body.income;
   userIncome.push(`Income: N${addIncome}`);
   res.status(201).json({ success: true, data: userIncome});
}

/* Updating the user income */
const update_income = (req, res) => {
   const incomeId = req.params.id;
   const updateIncome = req.body;

   if (!incomeId) {
      res.status(400).json( {message: 'No income with this id' });
   }
   userIncome[incomeId] = updateIncome;
   res.status(200).json(userIncome); 
}

/* Summing all income */
const add_all_income = (req, res) => {
   const amount = userIncome.slice(0, 10);
   const allSum = amount.reduce((acc, prevValue) => {
      acc + prevValue, 0
   });
   res.status(200).res.json({ message: `Total Sum is: N${allSum}` });
}

module.exports = { 
   user_income,
   add_user_income,
   update_income,
   add_all_income
}