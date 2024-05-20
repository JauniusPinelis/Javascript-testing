const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [];
let currentId = 1;

// Create a new user
app.post('/users', (req, res) => {
    const { name, dateOfBirth } = req.body;
    const newUser = { id: currentId++, name, dateOfBirth };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Get a user by ID
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// Update a user by ID
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const { name, dateOfBirth } = req.body;
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex !== -1) {
        users[userIndex] = { id: userId, name, dateOfBirth };
        res.json(users[userIndex]);
    } else {
        res.status(404).send('User not found');
    }
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('User not found');
    }
});

app.listen(port, () => {
    console.log(`User API listening at http://localhost:${port}`);
});
