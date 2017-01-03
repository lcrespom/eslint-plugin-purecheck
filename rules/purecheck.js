'use strict';
const purecheck = require('purecheck');
const ErrorType = purecheck.ErrorType;


function getMessage(e) {
	switch (e.type) {
		case ErrorType.ReadThis:
			return '"this" should not be accessed';
		case ErrorType.ReadNonLocal:
			return 'Only local variables or parameters should be accessed';
		case ErrorType.WriteThis:
			return '"this" should not be updated';
		case ErrorType.WriteNonLocal:
			return 'Only local variables can be updated';
		default:
			throw Error(`Unrecognized error type: ${e.type}/${ErrorType[e.type]}`);
	}
}


const create = context => {
	return {
		Program: node => {
			let { errors } = purecheck.checkTree(node);
			for (let e of errors) {
				context.report({
					node: e.node,
					message: getMessage(e)
				})
			}
		}
	}
}

module.exports = {
	create
}
