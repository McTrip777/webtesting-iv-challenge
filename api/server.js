// Imports go here
const express = require('express');
const helmet = require('helmet');

// Routes go here


// Calling imports
const server = express();
server.use(helmet());
server.use(express.json());

// Calling Routes


// test Browser
server.get('/', (req,res) => {
    res.send('Hello World');
});

module.exports = server;