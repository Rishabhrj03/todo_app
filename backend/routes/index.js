const express = require('express');
const { Route } = require('../constant');
const todo = require('./todo');

const router = express.Router();

router.use(Route.TODO, todo);

module.exports = router;
