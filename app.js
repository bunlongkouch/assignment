const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON
app.use(express.json());

// Registration Service (POST)
app.post('/register', (req, res) => {
    const user = req.body;
    res.json({ message: 'User registered', user });
});

// Login Service (POST)
app.post('/login', (req, res) => {
    const credentials = req.body;
    res.json({ message: 'User logged in', credentials });
});

// Search Service (GET)
app.get('/search', (req, res) => {
    const query = req.query;
    res.json({ message: 'Search results', query });
});

// Profile Update Service (PUT)
app.put('/profile/:id', (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;
    res.json({ message: 'Profile updated', userId, updatedData });
});

// Delete User Service (DELETE)
app.delete('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: 'User deleted', userId });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});