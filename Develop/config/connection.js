require('dotenv').config(); // Load environment variables from .env file
const Sequelize = require('sequelize'); // Import Sequelize

// Create a Sequelize instance with database credentials
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  dialectOptions: {
    decimalNumbers: true,
  },
});

module.exports = sequelize; // Export the Sequelize instance
