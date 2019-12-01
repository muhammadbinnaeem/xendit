require('dotenv').config(); // Sets up dotenv as soon as our application starts

const express = require('express'); 
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const mongoose = require('mongoose');
// Logging
const morgan = require('morgan');
const Logger = require('./logger');
const expressLogger = Logger('express');
const databaseLogger = Logger('database');
// Routes
const routes = require('./routes/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(morgan('combined', {
  stream: expressLogger.stream
}));
// Connect MongoDB 
function connectWithRetry(){
  mongoose.connect(process.env.MONGO_LOCAL_CONN_URL)
    .catch(err => {
        console.log(err);
        setTimeout(connectWithRetry, 5000)
      });
}

connectWithRetry();
// Mongoose debuging and loging through winston
mongoose.set('debug', (collectionName, method, query, doc) => {
  databaseLogger.info(`Mongoose: ${collectionName}.${method}(${JSON.stringify(query)}, ${JSON.stringify(doc)})`);
});

app.use('/api/v1', routes(router));

module.exports = app;