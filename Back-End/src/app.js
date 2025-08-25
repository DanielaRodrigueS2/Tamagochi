const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const TamagochiRoutes = require('./routes/TamagochiRoutes');
const AuthRoutes = require('./routes/AuthRoutes');

const app = express({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credetials: true
});
app.use(cors());
app.use(express.json())

app.use(AuthRoutes);
app.use(TamagochiRoutes);


module.exports = app