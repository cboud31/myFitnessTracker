const express = require('express');

const app = express();

// Delete this generic route later
app.get('/', (req, res) =>
  res.json({
    msg: 'Welcome to the kb-Trainer API!',
  })
);

// Define & mount API routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/exercises', require('./routes/exercises'));
app.use('/api/routines', require('./routes/routines'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
