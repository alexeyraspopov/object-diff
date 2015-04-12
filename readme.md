# object-diff

## Usage

	var { diff, apply } = require('object-diff');

	var a = { ... }, b = { ... };

	var patch = diff(a, b);

	apply(patch, b); // equals to a;