// backend/server.js
const express = require('express');
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Initialize Sequelize
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
});

app.get('/', (req, res) => {
  res.send('Welcome to Market Muse API!');
});

// Sync Database and Start Server
sequelize.authenticate()
  .then(() => {
    console.log('Connected to PostgreSQL database');
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
});