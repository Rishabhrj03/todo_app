const express = require('express');
const {
	getTodo,
	addTodo,
	updateTodo,
	deleteTodo,
	getAllTodos,
} = require('../controllers/todo');
const { todoValidator } = require('../middleware/validation');
const resultValidator = require('../utils/validator');

const router = express.Router();

router.get('/', getAllTodos);
router.post('/', todoValidator, resultValidator, addTodo);
router.get('/:id', getTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
