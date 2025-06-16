// server.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Route to serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Sample route for form submissions (you can expand this)
app.post('/register', (req, res) => {
  console.log('Received Registration:', req.body);
  res.send({ status: 'success', message: 'User registered successfully!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
