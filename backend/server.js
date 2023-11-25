const express = require('express');
const cors = require('cors');
const router = require('./routes');
const errorHandler = require('./utils/error-handler');

require('dotenv').config();

const app = express();
const { PORT = 8000 } = process.env;
const version = '/api/v1';

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(version, router);

app.get('/', (req, res) => {
	res.send('welcome');
});

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`);
});
