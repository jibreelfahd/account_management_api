const UserIncome  = require('../db/models/userIncomeModel')


/* Getting the gross-income */
const gross_income = async (req, res) => {
   try {
      if (!UserIncome) {
         res.status(400).json( {message: 'No income exists added' });
      }
      
      const sumIncome = await UserIncome.findAll({
         attributes: [
            'id',
            [sequelize.fn('sum', sequelize.col('income')), 'totalIncome']
         ],
         group: ['id'],
         raw: true
      });

      const grossIncome = sumIncome / 12
      res.status(201).json({ success: true, grossIncome });
   } catch (err) {
      console.log('Err from gross income', err);
   } 
}

module.exports = { gross_income };