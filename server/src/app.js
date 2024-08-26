const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('./routes/v1');

// enable cors
app.use(cors());
app.options('*', cors());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use('/v1', routes);

app.get('/status', (req, res) => {
	res.send(true);
});

module.exports = app;
