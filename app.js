// Require packages and set the port
const express = require('express');
const port = 3002;
const app = express();

// look for a GET request on the root (/) of the server
app.get('/', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.send('Hello, Server!');
});

// Start the server
const server = app.listen(port, (error) => {
if (error) return console.log(`Error: ${error}`);

console.log(`Server listening on port ${server.address().port}`);
});
