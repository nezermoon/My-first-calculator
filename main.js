function calc(mathAction, a, b) {
    if (mathAction == '+') {
        return (+a + +b === 0) ? 0 : +a + +b || 'Error';
    } else if (mathAction == '-') {
        return (a - b === 0) ? 0 : a - b || 'Error';
    } else if (mathAction == '*') {
        return (a * b === 0) ? 0 : a * b || 'Error'; 
    } else if (mathAction == '/') {
        return (a / b === 0) ? 0 : a / b || 'Error';
    } else if (mathAction == '**') {
        return (a ** b === 0) ? 0 : a ** b || 'Error';
    } else if (mathAction == '%') {
        return (a % b === 0) ? 0 : a % b || 'Error';
    } else {
        return 'Unknown operation';
    }
}

// console.log(calc('', ,));
