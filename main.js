// function calc(mathAction, a, b) {
//     if (mathAction == '+') {
//         return (+a + +b === 0) ? 0 : +a + +b || 'Error';
//     } else if (mathAction == '-') {
//         return (a - b === 0) ? 0 : a - b || 'Error';
//     } else if (mathAction == '*') {
//         return (a * b === 0) ? 0 : a * b || 'Error'; 
//     } else if (mathAction == '/') {
//         return (a / b === 0) ? 0 : a / b || 'Error';
//     } else if (mathAction == '**') {
//         return (a ** b === 0) ? 0 : a ** b || 'Error';
//     } else if (mathAction == '%') {
//         return (a % b === 0) ? 0 : a % b || 'Error';
//     } else {
//         return 'Unknown operation';
//     }
// }

//console.log(calc('', ,));

function calc(mathAction, a, b) {
  switch(mathAction) {
    case '+':
			return (+a + +b === 0) ? 0 : +a + +b || 'Error';
			break;
		case '-':
			return (a - b === 0) ? 0 : a - b || 'Error';
			break;
		case '*':
			return (a * b === 0) ? 0 : a * b || 'Error';
			break;
		case '/':
			return (a / b === 0) ? 0 : a / b || 'Error';
			break;
		case '**':
			return (a ** b === 0) ? 0 : a ** b || 'Error';
			break;
		case '%':
			return (a % b === 0) ? 0 : a % b || 'Error';
			break;
		default:
			return 'Unknown operation';
	}
}

console.log(calc('%', 8, 3));