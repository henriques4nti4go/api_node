const express = require('express');
const crypto = require('crypto');
// const connection = require('./database/connection.js');
const users = require('./controllers/UserController');
const route = express.Router();


route.get('/api/users', users.index);

route.post('/api/users', users.store);

module.exports = route;