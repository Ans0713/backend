// routes/users.js
const express = require('express');
const router = express.Router();

// Route for users
router.get('/', (req, res) => {
  res.render('users', { title: 'Users' });
});

module.exports = router;
