// routes/index.js
const express = require('express');
const router = express.Router();

// Route for the homepage
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

module.exports = router;
