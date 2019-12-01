require('dotenv').config();
var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect(process.env.MONGO_LOCAL_CONN_URL, function() {
 
  // Load Mongoose models
  seeder.loadModels([
    './models/users.js'
  ]);
 
  // Clear specified collections
  seeder.clearModels(['User'], function() {
        const usersData = require('./users.json');
        seeder.populateModels(usersData, function() {
        seeder.disconnect();
        });
  });
});