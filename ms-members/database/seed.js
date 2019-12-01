require('dotenv').config();
var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect(process.env.MONGO_LOCAL_CONN_URL, function() {
 
  // Load Mongoose models
  seeder.loadModels([
    './models/members.js'
  ]);
 
  // Clear specified collections
  seeder.clearModels(['Member'], function() {
        // seeding data of members
        const membersData = require('./members.json');
        // insert data
        seeder.populateModels(membersData, function() {
        seeder.disconnect();
        });
  });
});