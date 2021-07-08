const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const stripe = require('stripe')('sk_test_');
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');


//HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);



app.listen(PORT, console.log(`Server is starting at port ${PORT}`));