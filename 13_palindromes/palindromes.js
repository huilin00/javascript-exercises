const palindromes = function (string) {
    // first remove puntuation and spaces using regrex
    let noPunctua = string.replace(/[^a-zA-Z0-9\s]/g, '');
    let noSpaces = noPunctua.replace(/\s/g, '');

    // convert all to lowerCase
    let processedString = noSpaces.toLowerCase();
    let reverse = '';
    for (let i = processedString.length - 1; i >= 0; i --) {
        reverse = reverse + processedString[i];
    }
    return processedString === reverse;

};

// Do not edit below this line
module.exports = palindromes;
