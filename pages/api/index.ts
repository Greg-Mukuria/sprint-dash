import { NextApiRequest, NextApiResponse } from 'next';

// Import required modules
import express from 'express';

// Create an instance of the Express application
const app = express();

// Define a simple API endpoint
app.get('/api/message', (req: NextApiRequest, res: NextApiResponse) => {
  const message = {
    message: 'Hello, this is a simple API endpoint in JavaScript!',
  };

  res.json(message);
});

export default app;
