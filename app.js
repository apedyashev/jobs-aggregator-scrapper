const mongoose = require('mongoose');
const config = require('./config');
const Promise = require('bluebird');

const {mongo} = config;
mongoose.Promise = Promise;
mongoose.connect(`mongodb://${mongo.server}:${mongo.port}/${mongo.dbName}`);

const APIReadable = require('./lib/APIReadable');
const APITransform = require('./lib/APITransform');
const DBWritable = require('./lib/DBWritable');

function runScrapper() {
  const apiStream = new APIReadable();
  const t = new APITransform();
  const dbWriteStream = new DBWritable();

  apiStream.on('error', (err) => {
    console.log('api error', err);
  });
  t.on('error', (err) => {
    console.log('transform error', err);
  });
  dbWriteStream.on('error', (err) => {
    console.log('db error', err);
  });

  apiStream.on('end', (data) => {
    console.log('end received', data);
  });
  apiStream.pipe(t).pipe(dbWriteStream);
}

runScrapper();

setInterval(() => {
  runScrapper();
}, config.importInterval);
