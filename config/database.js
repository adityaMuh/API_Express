const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/note_api';
const mongoDBTest = 'mongodb://localhost/note_api_test';

if (false) {
    mongoose.connect(mongoDBTest);
  } else {
    mongoose.connect(mongoDB);
  }

//mongoose.Promise = global.Promise;

module.exports = mongoose;