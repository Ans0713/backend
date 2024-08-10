// app.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Set up middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });