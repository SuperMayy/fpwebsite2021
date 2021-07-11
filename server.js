const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// create application/json parser
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

const PORT = process.env.PORT || 9000;

const routes = require('./routes/api');


//HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(PORT, console.log(`Server is starting at port ${PORT}`));