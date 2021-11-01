function calc(mathAction, a, b) {
    if (mathAction == '+') {
        return (+a + +b) || 'Error';
    } else if (mathAction == '-') {
        return (a - b) || 'Error';
    } else if (mathAction == '*') {
        return (a * b) || 'Error'; 
    } else if (mathAction == '/') {
        return (a / b) || 'Error';
    } else if (mathAction == '**') {
        return (a ** b) || 'Error';
    } else if (mathAction == '%') {
        return (a % b) || 'Error';
    } else {
        return 'Unknown operation';
    }
}

// console.log(calc('', ,));
