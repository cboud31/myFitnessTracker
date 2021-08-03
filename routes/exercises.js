const express = require('express');
const exerciseRouter = express.Router();

// Food for thought...
// ! Get exercise by id?
// Do we need to edit exercises?

// @route:      GET /api/exercises
// @descr:      Get all exercises from db
// @access:     Public
exerciseRouter.get('/', (req, res) => {
  res.json({
    msg: 'Get all exercises from db.',
  });
});

// @route:      GET /api/exercises/:id
// @descr:      Get all exercises from db
// @access:     Public
exerciseRouter.get('/:id', (req, res) => {
  res.json({
    msg: `'Get exercise from db with id of ${req.params.id}.'`,
  });
});

// @route:      POST /api/exercises
// @descr:      Create new exercise
// @access:     Private (or Admin?)
exerciseRouter.post('/', (req, res) => {
  res.json({
    msg: 'Create new exercise.',
  });
});

// @route:      PUT /api/exercises/:id
// @descr:      Update exercise
// @access:     Private (or Admin?)
exerciseRouter.put('/', (req, res) => {
  res.json({
    msg: `Update exercise with if of ${req.params.id}`,
  });
});

// @route:      DELETE /api/exercises/:id
// @descr:      Delete exercise
// @access:     Private (or Admin?)
exerciseRouter.delete('/', (req, res) => {
  res.json({
    msg: `Delete exercise with if of ${req.params.id}`,
  });
});

module.exports = exerciseRouter;
