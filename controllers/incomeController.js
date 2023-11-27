const UserIncome = require('../db/models/userIncomeModel');
const sequelize = require('../db/index');

// @desc Getting the users income
const user_income = async (req, res) => {
   try {
      const getIncome = await UserIncome.findAll();
      res.status(200).json({ sucess: true, getIncome });
   } catch (err) {
      console.log('Err from get all income', err);
   }
}

// @desc Adding the users income
const add_user_income = async (req, res) => {
   try {
      const { income, desc } = req.body;
      const userIncome = await UserIncome.create({ income, desc });
      res.status(201).json({ success: true, userIncome});
   } catch (err) {
      console.log('Err from create income instance', err);
   }
}

// @desc Updating the user income
const update_income = async (req, res) => {
   try {
      const { id } = req.params;
      const { income, desc } = req.body;

      if (!id) {
         res.status(400).json( {message: 'No income with this id' });
      }
      
      const updates = await UserIncome.update(
         { income: income, desc: desc },
         { where: { id: id }, returning: true },
      );
      res.status(201).json({ success: true, updates });
   } catch (err) {
      console.log('Err from update income', err);
   } 
}

/* Summing all income */
const add_all_income = async (req, res) => {
   try {
      if (!UserIncome) {
         res.status(400).json( {message: 'No income to be added' });
      }
      
      const sumIncome = await UserIncome.findAll({
         attributes: [
            'id',
            [sequelize.fn('sum', sequelize.col('income')), 'totalIncome']
         ],
         group: ['id'],
         raw: true
      });
      res.status(201).json({ success: true, sumIncome });
   } catch (err) {
      console.log('Err from sum income', err);
   } 
}

module.exports = { 
   user_income,
   add_user_income,
   update_income,
   add_all_income
}