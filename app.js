const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
  });

app.get('/', (req, res) => res.send('Sagar Guney'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
