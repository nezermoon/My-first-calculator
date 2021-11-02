// version with using switch
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

// console.log(calc('', , ));
