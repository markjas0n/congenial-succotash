const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

// Seed all the data to the database
const seedAll = async () => {
  await sequelize.sync({ force: true }); // Sync the database
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories(); // Seed categories
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts(); // Seed products
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags(); // Seed tags
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTags(); // Seed product tags
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0); // Exit the process
};

seedAll(); // Call the function to seed all data
