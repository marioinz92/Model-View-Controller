const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Import your Sequelize instance

const Comment = sequelize.define('Comment', {
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Comment;
