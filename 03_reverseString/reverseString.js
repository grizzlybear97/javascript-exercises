const reverseString = function(word) {
    let revArray = [];
    for(let w of word){
        revArray.unshift(w);
    }
    return revArray.join('');
};
console.log(reverseString("hello"))
// Do not edit below this line
module.exports = reverseString;
