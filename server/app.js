const express = require('express');
const app = express();
const studentRoutes  = require('./server/routes/students');

app.use(express.json());
app.use('/api', studentRoutes);

module.exports = app;