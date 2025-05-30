const express = require('express');
const parser = require('body-parser');


const app = express();
const port = 3000;
const users = [];

app.use(parser.json());

app.get('/', (req, res) => {
  res.send('Hi .. running Hello World!');
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.post('/users', (req, res) => {
    const newUserId = req.body.userId;
    if (!newUserId) {
        return res.status(400).send({ error: 'User ID is required' });
    }   

    // Check if user already exists
    if (users.includes(newUserId)) {
        return res.status(409).send({ error: 'User already exists' });
    }

    users.push(newUserId);
    res.status(201).send({ message: 'User created successfully', userId: newUserId });
});

app.get('/users', (req, res) => {
    if (users.length === 0) {
        return res.status(404).send({ error: 'No users found' });
    }
    res.status(200).send(users);
});