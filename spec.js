var _ = require('./index'),
	assert = require('assert');

describe('object-diff', function() {
	it('should satisfy math rules', function() {
		// a - b = c
		// c + b = a
		var a, b, c;

		a = { tag: 'div', attrs: { className: 'asd', prop: 'boo' } };
		b = { tag: 'p', attrs: { className: 'fff', prop2: 'df' } };
		c = _.diff(a, b);

		assert.deepEqual(_.apply(c, b), a);
	});
});