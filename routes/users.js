const express = require('express');
const usersRouter = express.Router();

// @route:      POST /api/users
// @descr:      Register a new user in the db
// @access:     Public
usersRouter.post('/', (req, res) => {
  res.json({
    msg: 'Register a new user.',
  });
});

module.exports = usersRouter;
