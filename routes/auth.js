const express = require('express');
const authRouter = express.Router();

// @route:      GET /api/auth
// @descr:      Retrieve user info from db
// @access:     Private
authRouter.get('/', (req, res) => {
  res.json({
    msg: 'Retrieve user info from db.',
  });
});

// @route:      POST /api/auth
// @descr:      Auth user & get token
// @access:     Public
authRouter.post('/', (req, res) => {
  res.json({
    msg: 'Auth user & get token.',
  });
});

module.exports = authRouter;
