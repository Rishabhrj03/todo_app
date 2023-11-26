const { validationResult } = require('express-validator');

const resultValidator = (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		next();
	} else {
		res.status(422).json({ errors: errors.array() });
	}
};
module.exports = resultValidator;
