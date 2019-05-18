const express = require('express');
const app = express();
const env = require('./config/environment');
const mongoose = require('mongoose');
const router = require('./config/router');
// const morgan = require('morgan');
const bodyParser = require('body-parser');


mongoose.connect(env.dbUri);

app.use(bodyParser.json());
app.use('/api', router);

// app.use(morgan('dev'));

app.listen(env.port, () => console.log(`Up and running on ${env.port}`));
