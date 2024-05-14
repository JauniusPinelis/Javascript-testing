const bodyParser = require('body-parser');
const pool = require('./db');
const express = require("express")

const app = express();

app.use(bodyParser.json());

// Create a todo
app.post('/todos', async (req, res) => {
    try {
        const { title, description, categoryId, userId } = req.body;
        const newTodo = await pool.query(
            `INSERT INTO todos (title, description, category_id, user_id) VALUES ($1, $2, $3, $4) RETURNING *`,
            [title, description, categoryId, userId]
        );

        const result = newTodo.rows[0];
        res.json(
            {
                title: result.title,
                description: result.description,
                categoryId: result.category_id,
                userId: result.user_id
            }
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Read all todos
app.get('/todos', async (req, res) => {
    try {
        const allTodos = await pool.query('SELECT * FROM todos');
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Update a todo
app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, category_id, user_id } = req.body;
        const updatedTodo = await pool.query(
            `UPDATE todos SET title = $1, description = $2, category_id = $3, user_id = $4 WHERE id = $5 RETURNING *`,
            [title, description, category_id, user_id, id]
        );
        res.json(updatedTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Delete a todo
app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM todos WHERE id = $1', [id]);
        res.json({ message: 'Todo deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = app;