const sumAll = function(a,b) {
    if(a>b) {
        let temp = a;
        a = b;
        b = temp;
    }
    else if(a<0 || b<0 || !Number.isInteger(a) || !Number.isInteger(b)) return "ERROR"

    let sum = 0;
    for(let i = a; i <= b; i++){
        sum += i;
    }
    return sum;
    
};
console.log(sumAll(1,4));
// Do not edit below this line
module.exports = sumAll;
