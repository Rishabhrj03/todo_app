const Todo = require('../models/todo');
const getAllTodos = async (req, res, next) => {
	try {
		const result = await Todo.findAll();
		res.status(200).json({
			message: 'Get all todos',
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

const getTodo = async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await Todo.findById(id);
		res.status(200).json({
			message: 'Get todo',
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

const addTodo = async (req, res, next) => {
	try {
		const result = await Todo.create(req.body);
		res.status(200).json({
			message: 'Add todo',
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

const updateTodo = async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await Todo.update(id, req.body);
		res.status(200).json({
			message: 'Updated todo',
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

const deleteTodo = async (req, res, next) => {
	try {
		const { id } = req.params;
		const todo = await Todo.findById(id);
		if (!todo) {
			res.status(200).json({
				message: `Todo with ${id} not exist `,
				data: [],
			});
		} else {
			const result = await Todo.remove(id);
			res.status(200).json({
				message: `Deleted todo having id ${id}`,
				data: [1],
			});
		}
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getTodo,
	addTodo,
	updateTodo,
	deleteTodo,
	getAllTodos,
};
