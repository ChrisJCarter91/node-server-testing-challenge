require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);


server.get('/', (req, res) => {
  res.send("It's alive!");
});

server.get('/students', (req, res) => {
  Students.getAll().then(students => {
    res.status(200).json(students);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

module.exports = server;