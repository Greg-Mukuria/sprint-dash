// Import required modules
const express = require('express');

// Create an instance of the Express application
const app = express();
const port = 3000;

// Define a simple API endpoint
app.get('/api/message', (req, res) => {
  const message = {
    message: 'Hello, this is a simple API endpoint in JavaScript!',
  };

  res.json(message);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
