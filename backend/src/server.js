const express = require('express');
const { createDatabase } = require('./config/config');
const client = require('./config/dbConfig');
const { createTables } = require('./controllers/tableControllers');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors'); 
require('dotenv').config();

const app = express();

app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, 
};
app.use(cors(corsOptions)); 

app.use('/', userRoutes);

const initializeApp = async () => {
  try {
    await createDatabase();

    await client.connect();

    await createTables();

    const PORT = 8000;

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Initialization error:', err.message);
    process.exit(1);
  }
};

initializeApp();
