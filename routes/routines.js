const express = require('express');
const routinesRouter = express.Router();

// @route:      GET /api/routines
// @descr:      Get all routines
// @access:     Private
routinesRouter.get('/', (req, res) => {
  res.json({
    msg: 'Get all routines.',
  });
});

// @route:      POST /api/routines
// @descr:      Create a new routine
// @access:     Public
routinesRouter.post('/', (req, res) => {
  res.json({
    msg: 'Create a new routine.',
  });
});

// @route:      PUT /api/routines/:id
// @descr:      Update routine
// @access:     Public
routinesRouter.put('/:id', (req, res) => {
  res.json({
    msg: `Update routine with id of ${req.params.id}`,
  });
});

// @route:      DELETE /api/routines/:id
// @descr:      Delete routine
// @access:     Public
routinesRouter.delete('/:id', (req, res) => {
  res.json({
    msg: `Delete routine with id of ${req.params.id}`,
  });
});

module.exports = routinesRouter;
