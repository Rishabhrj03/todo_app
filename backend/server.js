const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const {PORT = 8000} = process.env;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send("welcome");
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});