// version with using object

function calc(a, act, b) {
	
	let mathAction = {
		sum: a + b,
		sub: a - b,
		mult: a * b,
		div: a / b, 
		exp: a ** b,
		rem: a % b,
	};

	if (typeof(a) !== 'number' || typeof(b) !== 'number') {
		return 'Error';
	} else if (mathAction[act] === undefined) {
		 return 'Unknown operation';
	} else {
		return mathAction[act];
	}
}

console.log(calc(, '',));