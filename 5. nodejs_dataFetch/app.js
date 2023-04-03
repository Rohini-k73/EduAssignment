const express = require('express');
const bodyParser = require('body-parser');

const router = require('./Routes/routes');  // importing the routes 

const hostname = 'localhost';
const port = "8055";

const app = express();

app.use(bodyParser.json());  // Initializing the body-parser as middleware

// block of code to handle CORS Issue - Cross Origin Resource Sharing
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/', router);  // registering the routes

// starting the server using the listen function on specific port
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});