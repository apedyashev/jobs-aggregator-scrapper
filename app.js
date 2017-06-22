const mongoose = require('mongoose');
const config = require('./config');
const Promise = require('bluebird');
const runScrapper = require('./lib');

const {mongo} = config;
mongoose.Promise = Promise;
mongoose.connect(`mongodb://${mongo.server}:${mongo.port}/${mongo.dbName}`);

runScrapper();

setInterval(() => {
  runScrapper();
}, config.importInterval);
