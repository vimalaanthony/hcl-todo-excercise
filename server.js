(function () {
  'use strict';

  /**
   * Module dependencies.
   */
  var config = require('./server/config/db'),
    express = require('./server/config/express');

  // Initialize express
  var app = express.init();

  // Start the app by listening on <port>
  app.listen(config.port);

  // Logging initialization
  console.log('Application started on port ' + config.port);

}());