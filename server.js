// Import express and path
const express = require ('express');
const path = require('path');

// Defining express app
const app = express();

// Setting port for localhost
const PORT = process.env.PORT || 3000;


// Setting up server to parse the body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting up server public directory for the static assets
app.use(express.static(path.join(__dirname, '/app/public')));

// Routes
// ===========================================================

require('./app/routes/api-routes.js')(app);
require('./app/routes/html-routes.js')(app);



//Starting server on PORT
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});