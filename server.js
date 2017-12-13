// require express etc.
const express = require("express");
const mongoose = require("mongoose");


// initialize express
const app = express();
// specify PORT with local and production
const PORT = process.env.PORT || 8080;

// connect to db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/spellingbee", {
  useMongoClient: true
});

// Start the API server
app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});