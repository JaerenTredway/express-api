// Require packages and set the port
const routes = require('./routes/routes');
const express = require('express');
const port = 3002;
const bodyParser = require('body-parser');
const app = express();

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

// look for a GET request on the root (/) of the server
// app.get('/', (request, response) => {
//     response.send({
//         message: 'Node.js and Express REST API'}
//     );
// });

routes(app); //this replaces the above .get() method

// Start the server
const server = app.listen(port, (error) => {
if (error) return console.log(`Error: ${error}`);

console.log(`Server listening on port ${server.address().port}`);
});
