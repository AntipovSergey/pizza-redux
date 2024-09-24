const express = require('express');
const morgan = require('morgan');
const pizzasRouter = require('./routes/pizzas.router');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/pizzas', pizzasRouter);

module.exports = app;
