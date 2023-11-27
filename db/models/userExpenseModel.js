const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../index');

const UserExpense = sequelize.define('userExpense', {
   expense: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
   desc: {
      type: DataTypes.STRING,
      allowNull: false
   }
});

UserExpense.sync({force: false})
   .then(result => console.log('Table is created', result))
   .catch((err) => console.log(err));

module.exports = UserExpense ;