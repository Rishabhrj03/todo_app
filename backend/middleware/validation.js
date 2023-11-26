const { body } = require('express-validator');

const todoValidator = [
	body('title', 'Title does not empty').not().isEmpty(),
	body('description', 'Description does not empty').not().isEmpty(),
];

module.exports = {
	todoValidator,
};
