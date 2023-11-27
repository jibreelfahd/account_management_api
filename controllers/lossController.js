const sequelize = require('../db/index');
const UserExpense = require('../db/models/userIncomeModel')


/* Getting the gross-income */
const loss = async (req, res) => {
   try {
      const amount = UserExpense.findAll({
         attributes: [
            'id',
            [sequelize.fn('sum', sequelize.col('expense'), 'lossInccured')]
         ],
         group: ['id'],
         raw: true
      });

      if (!amount > UserExpense) {
        return res.status(200).json({ success: true, UserExpense });
      }
      res.status(200).json({ success: true, amount });
   } catch (err) {
   console.log('Error from loss instance', err);
   }
}

module.exports = { loss };