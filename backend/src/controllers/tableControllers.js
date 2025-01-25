const client = require('../config/dbConfig');
const {createUserTableQuery} = require('../utils/tableSchema');

const createTables = async () => {
  try {
    await client.query(createUserTableQuery());
    console.log('User table created successfully');
  } catch (error) {
    console.error('Error creating tables: ', error);
    throw error;
  }
};

module.exports = {
  createTables
};
