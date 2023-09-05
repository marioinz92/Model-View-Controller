const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql',
});

const User = sequelize.define('User', {
  username: DataTypes.STRING,
  password: DataTypes.STRING,
});

module.exports = User;
