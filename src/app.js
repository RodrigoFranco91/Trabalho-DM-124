const express = require('express');
const app = express();

// Middleware imports
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const notFound = require('./middleware/not-found');

// Middleware usages
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Routerss
app.use('/api/entregas', require('./routes/entregas'));
app.use(notFound);

module.exports = app;