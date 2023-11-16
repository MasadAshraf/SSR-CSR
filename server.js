// Importing required modules
const express = require('express');

// Creating an Express application
const app = express();

// Define a route for the home page


console.log("Masad")

app.use(express.static('public'))

app.get('/api', (req, res) => {
  const words = ["Mango", "Orange", "Banana"]
  res.status(200).send({word : words[Math.floor(Math.random() * 3)]})
});

// Set up the server to listen on a specific port
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
