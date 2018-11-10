const express = require('express');
const apiRoutes = require('./api-routes');
const app = express();

app.use('/api', apiRoutes);

let port = process.env.port || 8080;

app.get('/', (req, res) => {
    res.send('Hello World with Express!');
});

app.listen(port, () => {
    console.log("Running restHub on port:" + port);
});
