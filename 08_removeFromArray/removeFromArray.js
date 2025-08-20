const removeFromArray = function() {
    const elementsToBeRemoved = [];
    const n = arguments.length - 1;
    for (let i = 0; i < n; i++) {
        elementsToBeRemoved.push(arguments[i+1]);
    }
    return arguments[0].filter(element => !elementsToBeRemoved.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
