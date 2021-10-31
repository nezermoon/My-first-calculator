function calc(mathAction, a, b) {
    if(mathAction != '+' && mathAction != '-' && mathAction != '*' && mathAction != '/' && mathAction != '**' && mathAction != '%') {
        return 'Unknown operation'
    }
    else if (mathAction == '+') {
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
    }
}

// console.log(calc('', ,));