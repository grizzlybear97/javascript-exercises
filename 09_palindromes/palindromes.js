const palindromes = function (str) {
    // arr = [...str];
    // arr = arr.map(item => item.toLowerCase());
    // arr = arr.filter(item => (item != '!' && item != ',' && item != '.' && item != ' '))
    // let revArr = []
    // arr.map(item => revArr.unshift(item))
    // return (arr.join('') === revArr.join(''))

    let alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let cleanedString = str.toLowerCase().split('').filter(letter => alphanumerical.includes(letter)).join('');

    let reversedString = cleanedString.split('').reverse().join('');

    return reversedString === cleanedString;
};

console.log(palindromes('Race, car!'))
// Do not edit below this line
module.exports = palindromes;
