const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'database_name', 
    'user_name', 
    'password', 
    {
        dialect: 'mysql', 
        host: 'server'
    }
);

try {
   sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

module.exports = sequelize;