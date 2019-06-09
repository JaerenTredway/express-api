//json data: this is replaced with the postgres pool below:
const users = [{
        id: 1,
        name: "Richard Hendricks",
        email: "richard@piedpiper.com",
    },
    {
        id: 2,
        name: "Bertram Gilfoyle",
        email: "gilfoyle@piedpiper.com",
    },
];

// TODO: Load the postgres pool connection:
// const pool = require('../data/config');

// TODO: display all users
// app.get('/users', (request, response) => {
//     pool.query('SELECT * FROM users', (error, result) => {
//         if (error) throw error;

//         response.send(result);
//     });
// });

// router: this gets replaced by the get() method above which sends a query to the database:
const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });

    app.get('/users', (request, response) => {
        response.send(users);
    });
}

// Export the router
module.exports = router;