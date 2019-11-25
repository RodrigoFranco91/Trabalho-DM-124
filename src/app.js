const express = require('express');
const app = express();

// Middleware imports
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// Middleware usages
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Routerss
app.use('/api/entregas', require('./routes/entregas'));


module.exports = app;