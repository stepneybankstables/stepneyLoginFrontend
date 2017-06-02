
const express = require('express'),
  superagent = require('superagent'),
  app = express(),
  port = process.env.PORT || 8000;

// const routes = require('./public/routes/routes');
// console.log(routes)
// routes(app);

// Set the view engine to use EJS as well as set the default views directory
app.set('view engine', 'ejs');
// app.set('views', __dirname + '/public/views');

// This tells Express out of which directory to serve static assets like CSS and images
app.use(express.static(__dirname + '/public'));

app.use('/web', require('./routes'));

app.listen(port);

console.log('RESTful frontend server started on: ' + port);
