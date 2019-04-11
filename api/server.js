// Imports go here
const express = require('express');

// Routes go here
const users = require('../router/user-router.js')

// Calling imports
const server = express();
server.use(express.json());

// Calling Routes
server.use('/users', users)

// test Browser
server.get('/', (req,res) => {
    res.send('Hello World');
});

module.exports = server;