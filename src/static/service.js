// Create an API endpoint using the React framework that accepts a JSON payload in a POST request  

// Note: React is a frontend library, not a backend framework. 
// To create an API endpoint, you would typically use a backend framework like Express (Node.js) or Next.js API routes.
// Here is an example using Next.js API route (recommended for React projects with Next.js):

// If you are using Next.js, save this file as 'pages/api/endpoint.js' instead of inside 'src/static'.
// If you intend to use pure Node.js with Express, see the comment below.

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body; // JSON payload
      // You can process the data here

      // Example: Echo the received data
      res.status(200).json({
        message: 'JSON payload received successfully!',
        received: data,
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to process JSON payload.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed. Only POST requests are accepted.' });
  }
}

/*
  // If you want a pure Node.js (Express) implementation, it would look like this:
  
  const express = require('express');
  const app = express();
  app.use(express.json());
  app.post('/api/endpoint', (req, res) => {
    const data = req.body;
    res.json({ message: 'JSON payload received successfully!', received: data });
  });
  app.listen(3000, () => console.log('Server running on port 3000'));
*/
