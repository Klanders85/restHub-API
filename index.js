const express = require('express');
const apiRoutes = require('./api-routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/api', apiRoutes);

mongoose.connect('mongodb://localhost/restHub');
let db = mongoose.connection;

let port = process.env.port || 8080;

app.get('/', (req, res) => {
    res.send('Hello World with Express!');
});

app.listen(port, () => {
    console.log("Running restHub on port:" + port);
});
