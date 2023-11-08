const { userIncome } = require('../models/userModel')


/* Getting the gross-income */
const gross_income = (req, res) => {
   const amount = userIncome.splice(0, 1);
   const allSum = amount.reduce((acc, prevValue) => {
      acc + prevValue, 0
   });
   const grossValue = allSum / 12;
   res.status(200).res.json(`Total Gross Income is: N${grossValue}`);
}

module.exports = { gross_income };