# object-diff

## Usage

	var { diff, apply } = require('object-diff');

	var newState = { ... }, oldState = { ... };

	var patch = diff(newState, oldState);

	apply(patch, oldState); // equals to newState;