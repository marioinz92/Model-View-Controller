const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Import your Sequelize instance

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Post;
