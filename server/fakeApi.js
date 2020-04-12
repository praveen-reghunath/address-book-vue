import express from 'express';

import contactFactory from './ContactFactory';

const app = express();

app.use(express.json());

const port = process.env.PORT || 3001;

app.use(function (request, response, next) {
    response.set('Content-Type', 'application/json');
    let message = `Incoming API request: ${request.originalUrl}`;
    console.log(message);
    next();
});

app.use(contactFactory.router);

const server = app.listen(port, "localhost");
server.timeout = 1000 * 60 * 2; // 2 minutes

console.log("Server is running @ http://localhost:" + port);