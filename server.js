// require express etc.
const express = require("express");

// initialize express
const app = express();

// specify PORT with local and production
const PORT = process.env.PORT || 8080;

// Start the API server
app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});