const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');

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
mongoose.connect( 'mongodb://127.0.0.1:27017/zomato',
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(client => {
    // starting the server using the listen function
    app.listen(port, hostname, () => {
        console.log(`Server running on http://${hostname}:${port}/`);
    });
}).catch(err => {
    console.log(err);
})