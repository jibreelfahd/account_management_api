const {  DataTypes } = require('sequelize');
const sequelize = require('../index');

const UserIncome = sequelize.define('userIncome', {
   income: {
      type: DataTypes.INTEGER,
      allowNull: false 
   },
   desc: {
      type: DataTypes.STRING,
      allowNull: false
   }
});

UserIncome.sync({ force: false})
   .then(result => console.log('Table is created', result))
   .catch((err) => console.log(err));

module.exports = UserIncome;