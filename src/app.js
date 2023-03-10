const express = require('express');
const morgan = require('morgan');
const router = require('./routes');

const app = express();

app.use(morgan('dev'))
app.use(router)

module.exports = app;