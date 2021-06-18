const Sequelize = require('sequelize');
const database = require('../lib/db');
 
const Posts = database.define('posts', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    shortDescription: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    postedAt: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
 
module.exports = Posts;