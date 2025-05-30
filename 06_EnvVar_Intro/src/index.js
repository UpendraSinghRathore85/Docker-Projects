const express = require('express');
const parser = require('body-parser');


const app = express();
const port = process.env.PORT || 5000; // Use environment variable for port, default to 3000
const users = [];

app.use(parser.json());

app.get('/', (req, res) => {
  res.send('Hi .. running Hello World!');
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});