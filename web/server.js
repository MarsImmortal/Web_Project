const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const base = `${__dirname}/public`;

const mongoURI = 'mongodb+srv://behalsaksham2003:N1qdx9uoVIYxmU7r@diweb.ywl8cwy.mongodb.net/';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Failed to connect to MongoDB:', error));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

const path = require('path');

app.use(express.static(path.join(__dirname, 'frontend', 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

app.get('/testing', (req, res) => {
  res.send("Server is working. This is a test. HOORAY!!!!!!");
});

app.get('/landing', (req, res) => {
  res.sendFile(`${base}/landing.html`);
});

// Routes
// Add your API routes here

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
