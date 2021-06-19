const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'arou4qaqs3nlxf1y',
  'knp43f8el7ic4vfw',
  't27tfxc4blhquu6q',
  {
      dialect: 'mysql',
      host: 'wcwimj6zu5aaddlj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com'
  }
);

try {
   sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

module.exports = sequelize;