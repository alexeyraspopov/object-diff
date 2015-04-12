exports.diff = function diff(a, b, key) {
	var patch = { key: key, added: {}, removed: {}, nested: [] }, key;

	for(key in a){
		if(!(key in b)){
			patch.added[key] = a[key];
		}else if(typeof a[key] === 'object'){
			patch.nested.push(diff(a[key], b[key], key))
		}else if(a[key] !== b[key]){
			patch.added[key] = a[key];
		}
	}

	for(key in b){
		if(!(key in a)){
			patch.removed[key] = true
		}
	}

	return patch;
};

exports.apply = function apply(patch, target) {
	var key, index;

	for(key in patch.added){
		target[key] = patch.added[key];
	}

	for(key in patch.removed){
		delete target[key];
	}

	for(index = 0; index < patch.nested.length; index++){
		apply(patch.nested[index], target[patch.nested[index].key]);
	}

	return target;
};