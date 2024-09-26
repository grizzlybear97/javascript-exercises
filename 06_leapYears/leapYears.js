const leapYears = function(year) {
/* original solution 
    if((year % 4 == 0 ) && (!(year % 100 == 0) || (year % 400 == 0))){
        
        return true;
    }
    return false;
*/
    const isYearDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isYearDivisibleByFourHundred = year % 400 === 0;
    if(isYearDivisibleByFour && (!isCentury || isYearDivisibleByFourHundred)){
        return true;
    }
    return false;
}
console.log(leapYears(2000))
console.log(leapYears(1900))
console.log(leapYears(1600))
// Do not edit below this line
module.exports = leapYears;
