const express = require('express');

const server = express();

server.get('/', (req, res) => {
  if (req.query.name) {
    res.send(`Olá ${req.query.name}`);
  } else {
    res.send('Olá Dev!');
  }
});

server.listen(3333);
