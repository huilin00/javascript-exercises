const fibonacci = function(n) {
    if (Number(n) < 0) {
        return 'OOPS';
    }
    else {
        if (Number(n) <= 2 && Number(n) != 0) {
            return 1;
        }
        if (Number(n) == 0) {
            return 0;
        }
    }
    return fibonacci(Number(n)-1) + fibonacci(Number(n)-2);
};

// Do not edit below this line
module.exports = fibonacci;
