class db {
  constructor() {
    this.mongoose = require('mongoose');
  };

  connect(config) {
    this.mongoose.set('debug', config.ENV === 'development' ? true : false);
    
    var connection = this.mongoose.connect(config.MONGODB_URI).connection;

    connection.on('connected', function () {
      console.log(`MongoDB Connected on ${config.MONGODB_URI}`);
    });

    connection.once('open', function() {
      console.log(`MongoDB NEW connection opened!`);
    });

    connection.on('error', function (err) {
      console.log(`MongoDB error ${err}`);
    });

    connection.on('disconnected', function () {
      console.log(`MongoDB disconnected!`);
    });
  }
}

module.exports = new db();
