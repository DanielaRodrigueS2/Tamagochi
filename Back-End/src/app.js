const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const TamagochiRoutes = require('./routes/TamagochiRoutes');
const AuthRoutes = require('./routes/AuthRoutes');

const app = express();
app.use(cors());
app.use(express.json())

app.use(AuthRoutes);
app.use(TamagochiRoutes);


module.exports = app