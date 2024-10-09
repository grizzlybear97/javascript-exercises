const fibonacci = function(num) {
    let count;
    if(typeof(num) != 'number'){
        count = parseInt(num);
    }else{
        count = num;
    }

    if(num < 0) return "OOPS";
    if(num == 0) return 0;

    let firstPrev = 1;
    let secondPrev = 0;
    for(let i = 2; i <= num; i++){
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }
    return firstPrev;
};
console.log(fibonacci(6))
// Do not edit below this line
module.exports = fibonacci;
